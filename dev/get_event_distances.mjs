/**
 *  run in node with arguments: 
 *  1) event/district code, 2) true for event/false for district
 *  Example:
 *  node get_event_data.mjs 2024pch 'dalton convention center dalton georgia'
 */
import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';
import { unlink } from 'fs';

const geocodingAPIKey = 'AIzaSyBDL3-BcKPUdJDhzbkA1te5lMg_iIMRBIs'; // take out when making code public
const dataFile = process.argv[2]; // name of file to add distance info to (without extension)
let eventLocation = process.argv[3] // event location

let combinedData = new Array();
const getEventDistance = async (data) => {
    let city;
    let state;
    let school;
    let url;
    for(var i = 0; i < data.length; i++) {
        city = data[i].city;
        state = data[i].state;
        school = data[i].school_name.replace('/', ' ').replace(/\s/g, '+').split(' &')[0].split('&')[0];
        eventLocation = eventLocation.replace(' ', '+');

        url = 'https://maps.googleapis.com/maps/api/distancematrix/json?destinations='
         + eventLocation + '&origins=' + school + '+' + city + '+' + state
         + '&units=imperial&key=' + geocodingAPIKey;
        
        console.log(url);

        let response = await fetch(url);
        let output = await response.json();

        console.log(output);

        combinedData.push(new Object());
        combinedData[i] = data[i];
        combinedData[i].event_distance = output.rows[0].elements[0].distance.text;
    }

    return combinedData;
};

(async () => {
    let teamsDataString = readFileSync('../data/' + dataFile + '.json', 'utf8', function(err, data) {});
    let teamsData = JSON.parse(teamsDataString);

    await getEventDistance(teamsData); // adds event distance and stores it in combinedData var
    console.log(combinedData); 

    writeFileSync(
        '../data/' + dataFile + '.js',
        "const data = " + JSON.stringify(combinedData, null, 2) + ";"
    );

    unlink('../data/' + dataFile + '.json', (err) => {
        if (err) {
          console.error(`Error removing file: ${err}`);
          return;
        }
      
        console.log(`json file has been successfully removed.`);
      });
})();
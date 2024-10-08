import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';

const geocodingAPIKey = 'AIzaSyBDL3-BcKPUdJDhzbkA1te5lMg_iIMRBIs'; // take out when making code public
const dataFile = '2024gagr.json'; // name of file to add distance info to 
let eventLocation = 'dalton convention center dalton georgia' // event location

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
    let teamsDataString = readFileSync('../data/' + dataFile, 'utf8', function(err, data) {});
    let teamsData = JSON.parse(teamsDataString);

    await getEventDistance(teamsData); // adds event distance and stores it in combinedData var
    console.log(combinedData); 

    writeFileSync(
        '../data/' + dataFile,
        JSON.stringify(combinedData, null, 2)
    );
})();
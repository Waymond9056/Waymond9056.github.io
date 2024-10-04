import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';

const geocodingAPIKey = 'AIzaSyBDL3-BcKPUdJDhzbkA1te5lMg_iIMRBIs'; // take out when making code public
const dataFile = "2024gacar.json"; // name of file to add distance info to 
const eventCity = "Dalton" // location of whatever competition to find distance from
const eventState = "Georgia"

let combinedData = new Array();
const getEventDistance = async (data) => {
    let city;
    let state;
    let url;
    for(var i = 0; i < data.length; i++) {
        city = data[i].city;
        state = data[i].state;
        url = 'https://maps.googleapis.com/maps/api/distancematrix/json?destinations='
         + eventCity + '+' + eventState + '&origins='
         + city + '+' + state +'&units=imperial&key=AIzaSyBDL3-BcKPUdJDhzbkA1te5lMg_iIMRBIs';

        let response = await fetch(url);
        let output = await response.json();

        console.log(output);

        combinedData.push(new Object());
        combinedData[i] = data[i];
        combinedData[i].event_distance = output.rows[0].elements[0].distance;
    }

    return combinedData;
};

(async () => {
    let teamsDataString = readFileSync('../data/' + dataFile, 'utf8', function(err, data) {});
    let teamsData = JSON.parse(teamsDataString);

    getEventDistance(teamsData); // adds event distance and stores it in combinedData var
    console.log(combinedData); 

    /* Uncomment when script works as intended
    writeFileSync(
        '../data/' + dataFile,
        JSON.stringify(combinedData, null, 2)
    );
    */
})();
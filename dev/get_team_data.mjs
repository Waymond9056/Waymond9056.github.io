/**
 *  run in node with arguments: 
 *  1) event/district code, 2) true for event/false for district
 *  Example:
 *  node get_team_data.mjs 2024pch false
 */
import { writeFileSync } from 'fs';

let event = process.argv[2];
let district = process.argv[2];
let isEvent = process.argv[3]; 

let url;
let name;

if (isEvent) {
    url = 'https://www.thebluealliance.com/api/v3/event/' + event + '/teams';
    name = event;
} else {
    url = 'https://www.thebluealliance.com/api/v3/district/' + district + '/teams';
    name = district;
}
const options = {
    headers: {
        'X-TBA-Auth-Key': '4UGmkRNbDwYlMa7KOeCr4yFec1IjPMQfbUX0FOnsoU3FOfG2u0HZL0UcoWgLs0ao'
    }
};

let teams = new Array();
const getTeams = async (url) => {
    const response = await fetch(url, options);
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
        teams.push(data[i].team_number);
    }
    // teams = [832, 1002, 1261, 1414, 1466, 1648, 1683, 1746, 1771, 1833, 2415, 2974, 3318, 3344, 3635, 4026, 4188, 4189, 4509, 4576, 5074, 5109, 5219, 5293, 5608, 5900, 6023, 6705, 6829, 6905, 6925, 7538, 8080, 8100, 8577, 8736, 8761, 8815, 8866, 9522];
    return teams;
};

let teamsData = new Array(); 
const getTeamsData = async (data) => {
    for (var i = 0; i < teams.length; i++) {
        let teamUrl = 'https://www.thebluealliance.com/api/v3/team/frc' + teams[i];
        let tResponse = await fetch(teamUrl, options);
        let tData = await tResponse.json();
        teamsData.push(new Object());
        teamsData[i] = {
            'team_number': teams[i],
            'nickname': tData.nickname,
            'city': tData.city,
            'state': tData.state_prov,
            // 'country': tData.country,
            'rookie_year': tData.rookie_year,
            'school_name': tData.school_name
        }
        let awardsUrl = 'https://www.thebluealliance.com/api/v3/team/frc' + teams[i] + '/awards';
        let aResponse = await fetch(awardsUrl, options);
        let aData = await aResponse.json();
        teamsData[i].number_of_awards = aData.length;
    }
    return data;
};

(async () => {
    await getTeams(url);
    console.log(teams);

    await getTeamsData(teams);
    console.log(teamsData);

    writeFileSync(
        '../data/' + name + '.json',
        JSON.stringify(teamsData, null, 2)
    );
})();

import { writeFileSync } from 'fs';

let event = '2024gacar';
let district = '2024pch';
let isEvent = true; // true to get teams by event, false to sort teams by district
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
const getData = async (url) => {
    const response = await fetch(url, options);
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
        teams.push(data[i].team_number);
    }
    return data;
};

let teamsData = new Array(); 
const getTeamsData = async (data) => {
    for (var i = 0; i < teams.length; i++) {
        let teamUrl = 'https://www.thebluealliance.com/api/v3/team/frc' + teams[i];
        let response = await fetch(teamUrl, options);
        let data = await response.json();
        teamsData.push(new Object());
        teamsData[i] = {
            'team_number': teams[i],
            'nickname': data.nickname,
            'city': data.city,
            'state': data.state_prov,
            // 'country': data.country,
            'rookie_year': data.rookie_year,
            'school_name': data.school_name
        }
    }
    return data;
};

(async () => {
    await getData(url);
    console.log(teams);

    await getTeamsData(teams);
    console.log(teamsData);

    writeFileSync(
        '../data/' + name + '.json',
        JSON.stringify(teamsData, null, 2)
    );
})();
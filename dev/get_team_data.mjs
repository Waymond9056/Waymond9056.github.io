import { writeFileSync } from 'fs';

let event = '2023gacmp';
let district = '2024pch';
let isEvent = false; // true to get teams by event, false to sort teams by district

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
    return data;
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
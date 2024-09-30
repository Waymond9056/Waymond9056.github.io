const eventUrl = 'https://www.thebluealliance.com/api/v3/district/2024pch/teams';   
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
        teamUrl = 'https://www.thebluealliance.com/api/v3/team/frc' + teams[i];
        let response = await fetch(teamUrl, options);
        let data = await response.json();
        teamsData.push(new Object());
        teamsData[i] = {
            'city': data.city,
            'country': data.country,
            'nickname': data.nickname,
            'rookie_year': data.rookie_year,
            'school_name': data.school_name
        }
    }
    return data;
}

(async () => {
    await getData(eventUrl);
    console.log(teams);

    await getTeamsData(teams);
    console.log(teamsData);
})();

$(document).ready(function(){
    $("button").click(function(){
        for (var i = 0; i < teams.length; ++i) {
            $("p").append(teams[i] + ", ");
        }   
    });
});
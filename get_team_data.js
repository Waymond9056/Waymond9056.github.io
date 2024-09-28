const url = 'https://www.thebluealliance.com/api/v3/district/2024pch/teams';   
const options = {
    headers: {
        'X-TBA-Auth-Key': '4UGmkRNbDwYlMa7KOeCr4yFec1IjPMQfbUX0FOnsoU3FOfG2u0HZL0UcoWgLs0ao'
    }
};

let teams;

const getData = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    teams = data;
    return data;
};

(async () => {
    await getData();
    console.log(teams);
})();

$(document).ready(function(){
    $("button").click(function(){
        for (var i = 0; i < teams.length; ++i) {
            $("p").append(teams[i].team_number + ", ");
        }
    });
});
    
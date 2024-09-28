
const API_KEY = '4UGmkRNbDwYlMa7KOeCr4yFec1IjPMQfbUX0FOnsoU3FOfG2u0HZL0UcoWgLs0ao';
const url = "https://www.thebluealliance.com/api/v3/event/2024gacmp/teams";
const options = {
    headers: {
        'X-TBA-Auth-Key': API_KEY
    }};

const output = 0;

getData(url).then((result) => {
    getTeamsData(result);
    console.log(result);
})
.catch((error) => console.log(error));  

async function getData(url) {
    let x = await fetch(url, options);
    let y = await x.json();
    return y;
}

function getTeamsData(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].nickname);
    }
    var teams = "";
    for (var i = 0; i < data.length - 1; i++) {
        teams += data[i].nickname + ", ";
    }
    teams += data[data.length - 1].nickname;

    $(document).ready(function() {
        $("button").click(function() {
            $("p").text(teams);
        });
    });
}
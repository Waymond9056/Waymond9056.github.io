let answer = data[0];

function addTableRow(teamData) {
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');
    const newRow = document.createElement('tr');

    // teamData.forEach((value, index) => {
    //   if (value == answer)
    //   const cell = document.createElement('td');
    //   cell.textContent = value;
    //   newRow.appendChild(cell);
    // });

    // for (var i = 0; i < teamData.length; i++) {
    //   const cell = document.createElement('td');
    //   cell.textContent = teamData[i];
    //   newRow.appendChild(cell);
    // }
    const team_number = teamData[0];
    const team_number_cell = document.createElement('td');
    if (team_number == answer.team_number) {
      team_number_cell.className = "tdright";
    } else if (answer - answer.team_number % 1000 == team_number - team_number % 1000) {
      team_number_cell.className = "tdclose";
    } else {
      team_number_cell.className = "tdwrong";
    }

    if (team_number < answer.team_number) {
      team_number_cell.textContent = teamData[0] + "↑";
    } else if (team_number > answer.team_number) {
      team_number_cell.textContent = teamData[0] + "↓";
    } else {
      team_number_cell.textContent = teamData[0];
    }
    newRow.appendChild(team_number_cell);

    const nickname = teamData[1];
    const nickname_cell = document.createElement('td');
    if (nickname != answer.nickname) {
      nickname_cell.className = "tdwrong";
    } else {
      nickname_cell.className = "tdright";
    }
    nickname_cell.textContent = teamData[1];
    newRow.appendChild(nickname_cell);

    const city = teamData[2];
    const city_cell = document.createElement('td');
    if (city != answer.city) {
      city_cell.className = "tdwrong";
    } else {
      city_cell.className = "tdright";
    }
    city_cell.textContent = teamData[2];
    newRow.appendChild(city_cell);

    const state = teamData[3];
    const state_cell = document.createElement('td');
    if (state != answer.state) {
      state_cell.className = "tdwrong";
    } else {
      state_cell.className = "tdright";
    }
    state_cell.textContent = teamData[3];
    newRow.appendChild(state_cell);
    
    const rookie_year = teamData[4];
    const rookie_year_cell = document.createElement('td');
    if (rookie_year == answer.rookie_year) {
      rookie_year_cell.className = "tdright";
    } else if (Math.abs(rookie_year - answer.rookie_year) <= 1) {
      rookie_year_cell.className = "tdclose";
    } else {
      rookie_year_cell.className = "tdwrong";
    }

    if (rookie_year < answer.rookie_year) {
      rookie_year_cell.textContent = teamData[4] + "↑";
    } else if (rookie_year > answer.rookie_year) {
      rookie_year_cell.textContent = teamData[4] + "↓";
    } else {
      rookie_year_cell.textContent = teamData[4];
    }
    newRow.appendChild(rookie_year_cell);

    const number_of_awards = teamData[5];
    const number_of_awards_cell = document.createElement('td');
    if (number_of_awards == answer.number_of_awards) {
      number_of_awards_cell.className = "tdright";
    } else if (Math.abs(number_of_awards - answer.number_of_awards) <= 5) {
      number_of_awards_cell.className = "tdclose";
    } else {
      number_of_awards_cell.className = "tdwrong";
    }

    if (number_of_awards < answer.number_of_awards) {
      number_of_awards_cell.textContent = teamData[5] + "↑";
    } else if (number_of_awards > answer.number_of_awards) {
      number_of_awards_cell.textContent = teamData[5] + "↓";
    } else {
      number_of_awards_cell.textContent = teamData[5];
    }
    newRow.appendChild(number_of_awards_cell);

    const event_distance = teamData[6];
    const event_distance_cell = document.createElement('td');
    if (event_distance == answer.event_distance) {
      event_distance_cell.className = "tdright";
    } else if (Math.abs(event_distance - answer.event_distance) <= 10) {
      event_distance_cell.className = "tdclose";
    } else {
      event_distance_cell.className = "tdwrong";
    }

    if (event_distance < answer.event_distance) {
      event_distance_cell.textContent = teamData[6] + "↑";
    } else if (event_distance > answer.event_distance) {
      event_distance_cell.textContent = teamData[6] + "↓";
    } else {
      event_distance_cell.textContent = teamData[6];
    }
    newRow.appendChild(event_distance_cell);

    // const team_number = document.createElement('td');
    //   team_number.textContent = teamData[0];
    //   newRow.appendChild(team_number);

    tbody.appendChild(newRow);
}

function guessAttempted() {
  document.getElementById("input").size = 0;
    const input = document.getElementById("input").value.replace(/(^\d+)(.+$)/i,'$1');;
    let index = 0;
    
    for (var i = 0; i < data.length; i++) {
      if (data[i].team_number == input) {
        index = i;
      }
    }

    addTableRow(
        [
            data[index].team_number,
            data[index].nickname, 
            data[index].city,
            data[index].state,
            data[index].rookie_year, 
            data[index].number_of_awards, 
            data[index].event_distance
        ]
    )
}

function addOptions() {
  var options = "<option value='' disabled selected hidden>FRC Team</option>";

  for (var i = 0; i < data.length; i++) {
    options += "<option>" + data[i].team_number + " - " + data[i].nickname + "</option>";
  }
  document.getElementById("input").innerHTML = options;
}

// let tds = document.querySelectorAll('td')
// let cnt = tds.length

// const myRowTimer = setInterval(displayRow, 1000);
// let row = 1;

// function displayRow(){

//    tds[row].classList.toggle("none");
//    row++
//    if(row == cnt)clearInterval(myRowTimer);
// }




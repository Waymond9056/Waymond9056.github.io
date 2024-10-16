let answerIndex = 0;
let answer = data[answerIndex];
// declare which row we're adding to so that the animation can apply to only that row
let row = 0;
function addTableRow(teamData) {
    const table = document.getElementById('data-table');
    const tbody = table.querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.id = "tr" + row;
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

    team_number_cell.textContent = team_number;
    if (team_number < answer.team_number) {
      team_number_cell.textContent += " ↑";
    } else if (team_number > answer.team_number) {
      team_number_cell.textContent += " ↓";
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
    city_cell.textContent = city;
    newRow.appendChild(city_cell);

    const state = teamData[3];
    const state_cell = document.createElement('td');
    if (state != answer.state) {
      state_cell.className = "tdwrong";
    } else {
      state_cell.className = "tdright";
    }
    state_cell.textContent = state;
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

    rookie_year_cell.textContent = rookie_year;
    if (rookie_year < answer.rookie_year) {
      rookie_year_cell.textContent += " ↑";
    } else if (rookie_year > answer.rookie_year) {
      rookie_year_cell.textContent += " ↓";
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

    number_of_awards_cell.textContent = number_of_awards;
    if (number_of_awards < answer.number_of_awards) {
      number_of_awards_cell.textContent += " ↑";
    } else if (number_of_awards > answer.number_of_awards) {
      number_of_awards_cell.textContent += " ↓";
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

    event_distance_cell.textContent = event_distance;
    if (event_distance < answer.event_distance) {
      event_distance_cell.textContent += " ↑";
    } else if (event_distance > answer.event_distance) {
      event_distance_cell.textContent += " ↓";
    }
    newRow.appendChild(event_distance_cell);
    tbody.appendChild(newRow);

    document.getElementById("tr" + row).animate([{opacity:0},{opacity:1}],1000);

    row++;
}

function guessAttempted(id) {
  let index = id;

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

function addOptions(inData) {

  $(document).ready(function() {
    $('.input-dropdown').select2({
      placeholder: "Select a team...",
      templateSelection: function (state) {
        return 'Select a team...';
      }
    });

    var option;
    for (var i = 0; i < inData.length; i++) {
      option = new Option(inData[i].team_number + ' - ' + inData[i].nickname, i, false, false);
      $('.input-dropdown').append(option).trigger('change');
    }
  });

}

function endGame(won) {
  if (won) {
    // make a visual for winning
  } else {
    // visual for losing
  }

  // reset(data) when retry is pressed or direct player to switch mode

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

function reset(newData) {
  $(document).ready(function() {
    $('.input-dropdown').find("option").remove().end();
    addOptions(newData);

    answerIndex = Math.floor(Math.random() * newData.length);
    answer = data[answerIndex];
    console.log(answerIndex);
    
    var tableBody = document.getElementById('table-body');
    console.log(tableBody);
    for (var i = row - 1; i > -1; i--) {
      tableBody.removeChild(document.getElementById("tr" + i));
    }
    row = 0;
  });
}

$(document).ready(function() {
  reset(data);

  $('#reset_button').click(function() {
    reset(data);
  })

  $('.input-dropdown').on('select2:select', function (e) {
    guessAttempted(e.params.data.id);
    $('input-dropdown').trigger('change');
  });
});



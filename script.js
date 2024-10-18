let answerIndex = 0;
let answer = data[answerIndex];
// declare which row we're adding to so that the animation can apply to only that row
let row = 0;
let win_streak = 0;
let won = false;
let hardMode = false;
let numGuesses = 5;

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

    if (!hardMode) {
      if (team_number < answer.team_number) {
        team_number_cell.textContent += " ↑";
      } else if (team_number > answer.team_number) {
        team_number_cell.textContent += " ↓";
      }
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
    if (!hardMode) {
      if (rookie_year < answer.rookie_year) {
        rookie_year_cell.textContent += " ↑";
      } else if (rookie_year > answer.rookie_year) {
        rookie_year_cell.textContent += " ↓";
      }
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
    if (!hardMode) {
      if (number_of_awards < answer.number_of_awards) {
        number_of_awards_cell.textContent += " ↑";
      } else if (number_of_awards > answer.number_of_awards) {
        number_of_awards_cell.textContent += " ↓";
      }
    }

    newRow.appendChild(number_of_awards_cell);

    const event_distance = parseFloat(teamData[6]);
    const guessed_distance = parseFloat(answer.event_distance);
    const event_distance_cell = document.createElement('td');
    if (event_distance == guessed_distance) {
      event_distance_cell.className = "tdright";
    } else if (Math.abs(event_distance - guessed_distance) <= 10) {
      event_distance_cell.className = "tdclose";
    } else {
      event_distance_cell.className = "tdwrong";
    }
    event_distance_cell.textContent = teamData[6];
    if (!hardMode) {
      if (event_distance < guessed_distance) {
        event_distance_cell.textContent += " ↑";
      } else if (event_distance > guessed_distance) {
        event_distance_cell.textContent += " ↓";
      }
    }

    newRow.appendChild(event_distance_cell);
    tbody.appendChild(newRow);

    document.getElementById("tr" + row).animate([{opacity:0},{opacity:1}],1000);

    row++;
}

function guessAttempted(id) {
  let index = id;
  $(".team_image").css({"filter": "blur(" + ((3 - row) * 2) + "px)"});
  $(".num_tries").html("Tries " + (row + 1) + " / " + numGuesses);

  if (index == answerIndex) {
    winGame();
  } else if (row == numGuesses - 1) {
    loseGame();
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

function addOptions(inData) {

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
}

function winGame() {
  $('.input-dropdown').select2({
    disabled: true,
    templateSelection: function (state) {
      return answer.team_number + ' - ' + answer.nickname;
    }
  });
  $(".team_image").css({"filter": "blur(0px)"});

  $("#share_popup_message").html("Congratulations!");
  if (!document.getElementById("remove_popup_switch").checked) {
    setTimeout(function() {
      share_popup.classList.add("show")
      $(".next_round_button").show();
    }, 1000);  
  } else {
    $(".next_round_button").show();
  }

  $('#close_share_popup').click(function() {
    share_popup.classList.remove("show");
  })

  won = true;
  win_streak++;
  $(".next_round_button").html("Next Round");
  $(".streak").html("Win Streak: " + win_streak +  " 🔥");

}

function loseGame() {
  $('.input-dropdown').select2({
    disabled: true,
    templateSelection: function (state) {
      return "Out of guesses...";
    }
  });
  $(".team_image").css({"filter": "blur(0px)"});

  document.getElementById("share_popup_message").innerHTML = "The team was: " + answer.team_number + " - " + answer.nickname;
  setTimeout(function() {
    share_popup.classList.add("show")
    $(".next_round_button").show();
  }, 1000);  
  
  $('#close_share_popup').click(function() {
    share_popup.classList.remove("show");
  })

  won = false;
  win_streak = 0;
  $(".next_round_button").html("Retry");
  $(".streak").html("Win Streak: " + win_streak +  " 🔥");
}

function getSquares() {
  var tableBody = document.getElementById('table-body'); 
  var cells = tableBody.getElementsByTagName('td');
  var text = '';
  console.log(cells);

  for (var i = 0; i < cells.length; i++) {

    if (i > 0 && i % 7 == 0) {
      text += '\n';
    }
    var className = cells[i].className;

    if (className == 'tdwrong') {
      text += '⬛';
    } else if (className == 'tdright') {
      text += '🟩';
    } else if (className == 'tdclose') {
      text += '🟨';
    }
  }
  return text;
}

function reset(newData) {
  //when the game is reset, check if the switch is switched to update hardMode boolean
  hardMode = (document.getElementById("hard_mode_switch")).checked;
  numGuesses = hardMode ? 4 : 5;

  $('#copy_results_button').html("Share");
  $('#copy_results_button').css("background-color", "#04AA6D");

  $('.input-dropdown').find("option").remove().end();
  addOptions(newData);
  $('.input-dropdown').prop("disabled", false);

  answerIndex = Math.floor(Math.random() * newData.length);
  answer = data[answerIndex];
  console.log(answer.team_number);
  
  var tableBody = document.getElementById('table-body');
  console.log(tableBody);
  for (var i = row - 1; i > -1; i--) {
    tableBody.removeChild(document.getElementById("tr" + i));
  }
  row = 0;
  $(".team_image").css({"filter": "blur(10px"});

  if (!hardMode) {
    $(".num_tries").html("Tries 0 / 5");
  } else {
    $(".num_tries").html("Tries 0 / 4");
  }
  $(".team_image").attr("src", "robots/" + answer.team_number + ".png");
  $(".streak").html("Win Streak: " + win_streak +  " 🔥");
}

function show_help_popup() {
  help_popup.classList.add("show")
  $('#close_help_popup').click(function() {
    help_popup.classList.remove("show");
  })
}

function show_settings_popup() {
  settings_popup.classList.add("show")
  $('#close_settings_popup').click(function() {
    settings_popup.classList.remove("show");
  })
}


function next_round(newData) {
    reset(newData);
    $(".next_round_button").hide();
}

$(document).ready(function() {
  next_round(data);

  $('#reset_button').click(function() {
    if (window.confirm("Are you sure? This will reset the current game and win streak.")) {
      win_streak = 0;
      reset(data);
    }
  })

  $('#help_button').click(function() {
    show_help_popup();
  })

  $('#settings_button').click(function() {
    show_settings_popup();
  })

  $('.next_round_button').click(function() {
    next_round(data);
  })

  $('.input-dropdown').on('select2:select', function (e) {
    guessAttempted(e.params.data.id);
    $('input-dropdown').trigger('change');
  });

  $('#copy_results_button').on('click', function() {
    $('#copy_results_button').html("Copied!");
    $('#copy_results_button').css("background-color", "#038455");
    if (won) {
      navigator.clipboard.writeText(
        "I solved today's FRCdle in " + (row) + ' tries!\n\n' + getSquares() + '\n\nhttps://frcdle.github.io/'
      );
    } else {
      navigator.clipboard.writeText(
        "I failed today's FRCdle!\n\n" + getSquares() + '\n\nhttps://frcdle.github.io/'
      );
    }
  });
});



// $(document).ready(function() {

// });

// myButton.addEventListener(
//   "click",
//   function () {
//       share_popup.classList.add("show");
//   }
// );
// closePopup.addEventListener(
//   "click",
//   function () {
//       
//   }
// );
// window.addEventListener(
//   "click",
//   function (event) {
//       if (event.target == share_popup) {
//           share_popup.classList.remove(
//               "show"
//           );
//       }
//   }
// );


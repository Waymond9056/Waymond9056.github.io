
function addTableRow(teamData) {
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');
    const newRow = document.createElement('tr');
    teamData.forEach((value, index) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      newRow.appendChild(cell);
    });
    tbody.appendChild(newRow);
}

function guessAttempted() {
  document.getElementById("input").size = 0;
    const input = document.getElementById("input").value;
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
            data[index].rookie_year, 
            data[index].number_of_awards, 
            data[index].event_distance
        ]
    )
}

function addOptions() {
  var options = "<option value='' disabled selected hidden>FRC Team</option>";

  for (var i = 0; i < data.length; i++) {
    options += "<option>" + data[i].team_number + "</option>";
  }
  document.getElementById("input").innerHTML = options;
}






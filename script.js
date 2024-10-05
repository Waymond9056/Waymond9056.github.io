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
    const input = document.getElementById("teamInput").value;

    addTableRow(
        [
            input,
            input, 
            input, 
            input, 
            input
        ]
    )
}
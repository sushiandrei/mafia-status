const addPlayerForm = document.getElementById("add-player-form");
const playerNameInput = document.getElementById("player-name");
const playerTableBody = document.querySelector("#player-table tbody");

addPlayerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerName = playerNameInput.value.trim();
  if (playerName) {
    addPlayer(playerName);
    playerNameInput.value = "";
  }
});

function addPlayer(playerName) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const statusCell = document.createElement("td");
  const statusButton = document.createElement("button");
  statusButton.classList.add("status-button");
  statusButton.textContent = "Alive";
  statusButton.addEventListener("click", () => toggleStatus(statusButton));
  nameCell.textContent = playerName;
  row.appendChild(nameCell);
  statusCell.appendChild(statusButton);
  row.appendChild(statusCell);
  playerTableBody.appendChild(row);
}

function toggleStatus(button) {
  const row = button.parentNode.parentNode;
  if (button.textContent === "Alive") {
    button.textContent = "Dead";
    row.classList.add("dead");
  } else {
    button.textContent = "Alive";
    row.classList.remove("dead");
  }
}

const addPlayerForm = document.getElementById("add-player-form");
const playerNameInput = document.getElementById("player-name");
const playerRoleInput = document.getElementById("player-role");
const playerTableBody = document.querySelector("#player-table tbody");
const showRolesButton = document.getElementById("show-roles-button");
const roleModal = document.getElementById("role-modal");
const roleTableBody = document.querySelector("#role-table tbody");
const closeButton = document.querySelector(".close");
let players = [];

addPlayerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerName = playerNameInput.value.trim();
  const playerRole = playerRoleInput.value.trim();
  if (playerName && playerRole) {
    addPlayer(playerName, playerRole);
    playerNameInput.value = "";
    playerRoleInput.value = "";
  }
});

function addPlayer(playerName, playerRole) {
  players.push({name: playerName, role: playerRole, alive: true});
  renderPlayers();
}

function renderPlayers() {
  playerTableBody.innerHTML = "";
  players.forEach((player, index) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const statusCell = document.createElement("td");
    const statusButton = document.createElement("button");
    nameCell.textContent = player.name;
    statusButton.textContent = player.alive ? "Alive" : "Dead";
    statusButton.addEventListener("click", () => {
      togglePlayerStatus(index);
    });
    row.appendChild(nameCell);
    statusCell.appendChild(statusButton);
    row.appendChild(statusCell);
    playerTableBody.appendChild(row);
  });
}

function togglePlayerStatus(index) {
  players[index].alive = !players[index].alive;
  renderPlayers();
}

showRolesButton.addEventListener("click", () => {
  roleTableBody.innerHTML = "";
  players.forEach((player) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const roleCell = document.createElement("td");
    nameCell.textContent = player.name;
    roleCell.textContent = player.role;
    row.appendChild(nameCell);
    row.appendChild(roleCell);
    roleTableBody.appendChild(row);
  });
  roleModal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  roleModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === roleModal) {
    roleModal.style.display = "none";
  }
});

console.log("Done.");

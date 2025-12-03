let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(player, computer) {

    const winningCases = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"]
    };

    if (player === computer) {
        return "draw";
    } else if (winningCases[player].includes(computer)) {
        return "player";
    } else {
        return "computer";
    }
}

function updateGame(playerSelection) {
    const computerSelection = computerChoice();
    const result = checkWinner(playerSelection, computerSelection);

    if (result === "player") {
        playerScore++;
        document.getElementById("result-text").textContent =
            `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "computer") {
        computerScore++;
        document.getElementById("result-text").textContent =
            `Computer wins! ${computerSelection} beats ${playerSelection}`;
    } else {
        document.getElementById("result-text").textContent = "It's a draw!";
    }

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Add button listeners
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        updateGame(button.dataset.choice);
    });
});

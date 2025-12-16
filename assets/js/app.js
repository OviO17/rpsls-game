let playerScore = 0;
let computerScore = 0;
let playerGamesWon = 0;
let computerGamesWon = 0;

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
    if (player === computer) return "draw";
    if (winningCases[player].includes(computer)) return "player";
    return "computer";
}

function updateGame(playerSelection) {
    const computerSelection = computerChoice();
    const result = checkWinner(playerSelection, computerSelection);

    if (result === "player") {
        playerScore++;
        document.getElementById("result-text").textContent =
            `You win this round! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "computer") {
        computerScore++;
        document.getElementById("result-text").textContent =
            `Computer wins this round! ${computerSelection} beats ${playerSelection}`;
    } else {
        document.getElementById("result-text").textContent = "It's a draw!";
    }

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    // Check if someone reached 5 points for this round
    if (playerScore === 5 || computerScore === 5) {
        const roundWinner = playerScore === 5 ? "You won this round!" : "Computer wins this round!";
        document.getElementById("result-text").textContent = roundWinner;

        // Update total games won
        if (playerScore === 5) playerGamesWon++;
        else computerGamesWon++;

        document.getElementById("player-games").textContent = playerGamesWon;
        document.getElementById("computer-games").textContent = computerGamesWon;

        // Check if someone reached 3 games won
        if (playerGamesWon === 3 || computerGamesWon === 3) {
            const matchWinner = playerGamesWon === 3 ? "You won the match!" : "Computer won the match!";
            document.getElementById("result-text").textContent = matchWinner;

            // Show New Game button
            document.getElementById("new-game").style.display = "inline-block";

            // Disable choice buttons
            document.querySelectorAll("button[data-choice]").forEach(btn => btn.disabled = true);
        } else {
            // Automatically reset round for next round
            playerScore = 0;
            computerScore = 0;
            document.getElementById("player-score").textContent = playerScore;
            document.getElementById("computer-score").textContent = computerScore;
        }
    }
}

// Choice buttons
document.querySelectorAll("button[data-choice]").forEach(button => {
    button.addEventListener("click", () => {
        updateGame(button.dataset.choice);
    });
});

// New Game button
document.getElementById("new-game").addEventListener("click", () => {
    // Reset everything
    playerScore = 0;
    computerScore = 0;
    playerGamesWon = 0;
    computerGamesWon = 0;

    document.getElementById("player-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
    document.getElementById("player-games").textContent = 0;
    document.getElementById("computer-games").textContent = 0;
    document.getElementById("result-text").textContent = "Make your move!";

    document.querySelectorAll("button[data-choice]").forEach(btn => btn.disabled = false);
    document.getElementById("new-game").style.display = "none";
});

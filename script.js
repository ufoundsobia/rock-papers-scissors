let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => playGame(button.id));
});

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = determineWinner(playerChoice, computerChoice);

  document.getElementById("player-choice").querySelector("span").textContent = playerChoice;
  document.getElementById("computer-choice").querySelector("span").textContent = computerChoice;
  document.getElementById("result").querySelector("span").textContent = result;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

}

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a Draw!";
  }
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    playerScore++;
    return "You Win!";
  }
  computerScore++;
  return "You Lose!";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("player-choice").querySelector("span").textContent = "None";
  document.getElementById("computer-choice").querySelector("span").textContent = "None";
  document.getElementById("result").querySelector("span").textContent = "Start Playing!";
}

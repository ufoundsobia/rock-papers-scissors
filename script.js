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
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a Draw!";
  }
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  }
  return "You Lose!";
}

function resetGame() {
  document.getElementById("player-choice").querySelector("span").textContent = "None";
  document.getElementById("computer-choice").querySelector("span").textContent = "None";
  document.getElementById("result").querySelector("span").textContent = "Start Playing!";
}

// function capitalize(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// }

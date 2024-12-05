// script.js
const choices = ["rock", "paper", "scissors"];

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    // Update the DOM
    document.getElementById("user-choice").textContent = `Your Choice: ${capitalize(userChoice)}`;
    document.getElementById("computer-choice").textContent = `Computer's Choice: ${capitalize(computerChoice)}`;
    document.getElementById("winner").textContent = `Winner: ${winner}`;
  });
});

// Get computer's choice randomly
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a Tie!";
  }
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You Win!";
  }
  return "Computer Wins!";
}

// Capitalize the first letter of a string
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

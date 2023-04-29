function computerPlay(){
  const choice = ["rock", "paper", "scissors"]

  return choice[Math.floor(Math.random() * choice.length)]
}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return "DRAW"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `YOU WON!!! ${playerSelection} beats ${computerSelection} `
  } else {
    return `YOU LOST!!! ${computerSelection} beats ${playerSelection}`
  }
}

function game() {

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {

    const playerSelection = prompt("Choose rock, paper, or scissors:");
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.startsWith("YOU WON!!!")) {
      playerScore++;
    } else if (result.startsWith("YOU LOST!!!")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("You are the WINNER");
  } else if (playerScore < computerScore) {
    console.log("You are the LOSER");
  } else {
    console.log("This match is a DRAW");
  }
}
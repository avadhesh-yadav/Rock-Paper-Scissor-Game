function resetScore() {
  localStorage.removeItem("savedResult");
  score = { Wins: 0, Losses: 0, Ties: 0 };
  showScore();

  if (score.Wins === 0 && score.Losses === 0 && score.Ties === 0) {
    document.querySelector(".js-showMoves").innerHTML = "Moves";
    document.querySelector(".js-showResult").innerHTML = "Result";
  }
}

let score = JSON.parse(localStorage.getItem("savedResult")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

// play game funioctn for actual logic of game
function playGame(UserChoice) {
  let result = "";
  const ComputerChoice = computerTurn();

  //if user select Rock
  if (UserChoice === "Rock") {
    if (ComputerChoice === "Rock") {
      result = "Tie";
    } else if (ComputerChoice === "Paper") {
      result = "You lose";
    } else {
      result = "You Won";
    }
  } //Rock scope ends

  //if user select Paper
  if (UserChoice === "Paper") {
    if (ComputerChoice === "Rock") {
      result = "You Won";
    } else if (ComputerChoice === "Paper") {
      result = "Tie";
    } else {
      result = "You lose";
    }
  } // Paper scope ends

  // if user select Scissor
  if (UserChoice === "Scissor") {
    if (ComputerChoice === "Rock") {
      result = "You lose";
    } else if (ComputerChoice === "Paper") {
      result = "You Won";
    } else {
      result = "Tie";
    }
  } // Scissor scope ends

  if (result === "You Won") {
    score.Wins += 1;
  } else if (result === "You lose") {
    score.Losses += 1;
  } else if (result === "Tie") {
    score.Ties += 1;
  }
  localStorage.setItem("savedResult", JSON.stringify(score));

  document.querySelector(".js-showResult").innerHTML = result;
  document.querySelector(".js-showMoves").innerHTML = `Your move:
  <img src="img/${UserChoice}.png" class="onshow" >
   computers Move:<img src="img/${ComputerChoice}.png" class="onshow">
  `;
  showScore();
} //playGame function ends

// function for computers move
function computerTurn() {
  let ComputerChoice = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    ComputerChoice = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    ComputerChoice = "Paper";
  } else {
    ComputerChoice = "Scissor";
  }
  return ComputerChoice;
}
// function for computer move end's

//function to show score
function showScore() {
  document.querySelector(
    ".js-showScore"
  ).innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties} `;
}

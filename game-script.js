
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function updateScores() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove == "rock") {
      result = "You Lose.";
    } else if (computerMove == "paper") {
      result = "You Win.";
    } else if (computerMove == "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove == "rock") {
      result = "You Win.";
    } else if (computerMove == "paper") {
      result = "Tie.";
    } else if (computerMove == "scissors") {
      result = "You Lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove == "rock") {
      result = "Tie.";
    } else if (computerMove == "paper") {
      result = "You Lose.";
    } else if (computerMove == "scissors") {
      result = "You Win.";
    }
  }

  const resultElement = document.querySelector(".js-result")
  resultElement.innerHTML = result;
  resultElement.style.display = 'block';

  const moveElement = document.querySelector(
    ".js-move"
  );
  moveElement.innerHTML = 
    `You chose:
    <img 
      src="./assests/${playerMove}-emoji.png"
      alt="Paper"
      class="move-icon" />
    ,
    Computer move:
    <img 
      src="./assests/${computerMove}-emoji.png"
      alt="Rock"
      class="move-icon" />
      `;
  moveElement.style.display = 'block';

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScores();
}

function pickComputerMove() {
  let randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

updateScores();
class RockPaperScissor {
  playerWins = 0;
  computerWins = 0;

  getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomIdx = Math.floor(Math.random() * 3);

    return choices[randomIdx];
  }

  playRound(playerSelection, computerSelection) {
    // Turn everything into lower case character for universal comparison
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();
    let isWin;

    // Game Logic
    if (playerSelectionLowerCase === computerSelectionLowerCase) {
      const resultPara = document.querySelector("p.result-announce-text");
      resultPara.textContent = "It's a Tie!";
    } else if (playerSelectionLowerCase === "rock") {
      if (computerSelectionLowerCase === "scissor") {
        isWin = true;
      } else if (computerSelection === "paper") {
        isWin = false;
      }
    } else if (playerSelectionLowerCase === "paper") {
      if (computerSelectionLowerCase === "rock") {
        isWin = true;
      } else if (computerSelection === "scissor") {
        isWin = false;
      }
    } else if (playerSelectionLowerCase === "scissor") {
      if (computerSelectionLowerCase === "paper") {
        isWin = true;
      } else if (computerSelection === "rock") {
        isWin = false;
      }
    }

    // Check win condition and announce round result
    if (isWin) {
      const resultPara = document.querySelector("p.result-announce-text");
      resultPara.textContent = `You Win! ${this.capitalize(
        playerSelection
      )} beats ${this.capitalize(computerSelection)}`;

      this.playerWins++;
    } else {
      const resultPara = document.querySelector("p.result-announce-text");
      resultPara.textContent = `You Lose! ${this.capitalize(
        computerSelection
      )} beats ${this.capitalize(playerSelection)}`;

      this.computerWins++;
    }

    // Update Scoreboard
    this.changeScoreboard();

    // Check or Finalize Game Status
    this.checkGameStatus();
  }

  changeScoreboard() {
    const playerWinTally = document.querySelector("p.player-win-tally");
    const computerWinTally = document.querySelector("p.computer-win-tally");

    playerWinTally.textContent = `Total Player Wins: ${this.playerWins}`;
    computerWinTally.textContent = `Total Computer Wins: ${this.computerWins}`;
  }

  capitalize(stringText) {
    let lowerCaseString = stringText.toLowerCase();
    let firstChar = lowerCaseString.charAt(0).toUpperCase();
    let restOfChars = lowerCaseString.substring(1);

    return firstChar + restOfChars;
  }

  checkGameStatus() {
    const resultPara = document.querySelector("p.result-announce-text");

    const rockButton = document.querySelector('button[data-selection="Rock"]');
    const paperButton = document.querySelector(
      'button[data-selection="Paper"]'
    );
    const scissorButton = document.querySelector(
      'button[data-selection="Scissor"]'
    );

    if (
      this.playerWins + this.computerWins === 5 &&
      this.playerWins > this.computerWins
    ) {
      resultPara.textContent = "Player Wins the Game! Congratulations!";
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorButton.disabled = true;
    } else if (
      this.computerWins + this.playerWins === 5 &&
      this.computerWins > this.playerWins
    ) {
      resultPara.textContent =
        "Computer Wins the Game! Better Luck Next Time, Player!";
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorButton.disabled = true;
    }
  }

  // Create UI elements and start the game : TheOdinProject - Revisiting Rock Paper Scissor
  setGameUI() {
    // Set Player Choice Buttons
    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorButton = document.createElement("button");

    rockButton.textContent = "Rock";
    rockButton.setAttribute("data-selection", "Rock");

    paperButton.textContent = "Paper";
    paperButton.setAttribute("data-selection", "Paper");

    scissorButton.textContent = "Scissor";
    scissorButton.setAttribute("data-selection", "Scissor");

    rockButton.addEventListener("click", this.setAndPlayRound.bind(this));
    paperButton.addEventListener("click", this.setAndPlayRound.bind(this));
    scissorButton.addEventListener("click", this.setAndPlayRound.bind(this));

    const body = document.querySelector("body");
    body.appendChild(rockButton);
    body.appendChild(paperButton);
    body.appendChild(scissorButton);

    // Set Div to Display result
    const container = document.createElement("div");
    container.classList.add("container");
    container.style["margin-top"] = "50px";

    const resultPara = document.createElement("p");
    resultPara.classList.add("result-announce-text");

    const playerWinTally = document.createElement("p");
    playerWinTally.classList.add("player-win-tally");

    const computerWinTally = document.createElement("p");
    computerWinTally.classList.add("computer-win-tally");

    container.appendChild(resultPara);
    container.appendChild(playerWinTally);
    container.appendChild(computerWinTally);

    body.appendChild(container);
  }

  setAndPlayRound(e) {
    let playerSelection = e.target.getAttribute("data-selection");
    let computerSelection = this.getComputerChoice();
    this.playRound(playerSelection, computerSelection);
  }
}

// Function to play five games
function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, Scissor?");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result === 1) {
      playerWins++;
    } else if (result === -1) {
      computerWins++;
    }
  }
  console.log(`Total Player Wins: ${playerWins}`);
  console.log(`Total Computer Wins: ${computerWins}`);
  if (playerWins > computerWins) {
    console.log("Player Wins the Game! Congratulations!");
  } else if (playerWins < computerWins) {
    console.log("Computer Wins the Game! Better Luck Next Time, Player!");
  } else {
    console.log(
      "It's a Tie!!! Let's have a second round to prove who is the best shall we?"
    );
  }
}

// Running the Game
const newRPSGame = new RockPaperScissor();
newRPSGame.setGameUI();

// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));

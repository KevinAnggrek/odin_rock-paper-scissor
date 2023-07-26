function getComputerChoice() {
    let choices=["Rock","Paper","Scissor"];
    let randomIdx = Math.floor(Math.random()*3);

    return choices[randomIdx];
}

function playRound(playerSelection,computerSelection) {
    // Turn everything into lower case character for universal comparison
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();
    let isWin;

    if (playerSelectionLowerCase===computerSelectionLowerCase)
    {
        return 0;
    }

    if (playerSelectionLowerCase==="rock")
    {
        if (computerSelectionLowerCase==="scissor")
        {
            isWin = true;
        }
        else if (computerSelection==="paper")
        {
            isWin = false;
        }
    }
    else if (playerSelectionLowerCase==="paper")
    {
        if (computerSelectionLowerCase==="rock")
        {
            isWin = true;
        }
        else if (computerSelection==="scissor")
        {
            isWin = false;
        }
    }
    else if (playerSelectionLowerCase==="scissor")
    {
        if (computerSelectionLowerCase==="paper")
        {
            isWin = true;
        }
        else if (computerSelection==="rock")
        {
            isWin = false;
        }
    }

    if (isWin)
    {
        return 1;
    }
    else
    {
        return -1;
    }
}

function capitalize(stringText) {
    let lowerCaseString = stringText.toLowerCase();
    let firstChar = lowerCaseString.charAt(0).toUpperCase();
    let restOfChars = lowerCaseString.substring(1);

    return firstChar+restOfChars;
}

function addWin(winCounter) {
    return winCounter++;
}

// Function to play five games
function game() {
    let playerWins=0;
    let computerWins=0;
    for(let i=0;i<5;i++)
    {
        const playerSelection=prompt("Rock, Paper, Scissor?");
        const computerSelection=getComputerChoice();
        const result = playRound(playerSelection,computerSelection);

        if (result===1)
        {
            playerWins++;
            console.log(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
        }
        else if (result===0)
        {
            console.log("It's a Tie!");
        }
        else
        {
            computerWins++;
            console.log(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
        }
    }
    console.log(`Total Player Wins: ${playerWins}`);
    console.log(`Total Computer Wins: ${computerWins}`);
    if (playerWins>computerWins)
    {
        console.log("Player Wins the Game! Congratulations!");
    }
    else if (playerWins<computerWins)
    {
        console.log("Computer Wins the Game! Better Luck Next Time, Player!");
    }
    else
    {
        console.log("It's a Tie!!! Let's have a second round to prove who is the best shall we?");
    }
}

// Running the Game
game();

// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));

const resultContainer = document.querySelector('.resultContainer');
//const computerChoiceContainer = document.querySelector('.computerChoiceContainer');
//const playerSelectionContainer = document.querySelector('.playerSelectionContainer');
const resultRowOne = document.querySelector('#resultRowOne');
//const resultRowTwo = document.querySelector('#resultRowTwo');
const resultRowThree = document.querySelector('#resultRowThree');
const resultRowFour = document.querySelector('#resultRowFour');
const scoreContainer = document.querySelector('#scoreContainer');

// declaring round counter
let counter = 1;
// declaring score counters
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

// the function for getting the Computer Choice
function getComputerChoice() {

    // declaring the option variable, through the Math.random, multiplied by 3(because we have 3 options), rounding the number with the Math.floor function and adding +1 for visual confort
    let choice = (Math.floor(Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            return ("rock");
        case 2:
            return ("paper");
        case 3:
            return ("scissors");
    }
}

// the function that plays 1 round of Rock-Paper-Scissors after taking 2 parameters, the playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {

    // announcing the fighters    
    //computerChoiceContainer.textContent = "Computer Choice: " + computerSelection;
    //playerSelectionContainer.textContent = "Player Selection: " + playerSelection;
    // empty line for visibility
    //console.log("");

    // declaring gameResult variable for Wins counter in game
    let gameResult;

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            resultRowOne.textContent = "Player WIN : Rock beats Scissors";
            gameResult = "playerWin";
        } else if (computerSelection === "paper") {
            resultRowOne.textContent = "Player LOSE : Paper beats Rock!";
            gameResult = "computerWin";
        } else {            // computerSelection === "rock"
            resultRowOne.textContent = "It's a TIE : Rock VS Rock";
            gameResult = "tie";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            resultRowOne.textContent = "Player WIN : Paper beats Rock";
            gameResult = "playerWin";
        } else if (computerSelection === "scissors") {
            resultRowOne.textContent = "Player LOSE : Scissors beat Paper!";
            gameResult = "computerWin";
        } else {            // computerSelection === "paper"
            resultRowOne.textContent = "It's a TIE : Paper VS Paper";
            gameResult = "tie";
        }
    } else {                // playerSelection === "scissors"
        if (computerSelection === "paper") {
            resultRowOne.textContent = "Player WIN : Scissors beat Paper";
            gameResult = "playerWin";
        } else if (computerSelection === "rock") {
            resultRowOne.textContent = "Player LOSE : Rock beats Scissors!";
            gameResult = "computerWin"
        } else {            // computerSelection === "paper"
            resultRowOne.textContent = "It's a TIE : Scissors VS Scissors";
            gameResult = "tie";
        }
    }

    //returning the gameResult for Game Counter
    return (gameResult);
}

// the Game function
function game(playerSelection) {

    scoreContainer.textContent = counter;
    let roundResult = playRound(playerSelection, getComputerChoice());
    if (roundResult === "playerWin") {
        playerScore++;
    } else if (roundResult === "computerWin") {
        computerScore++;
    } else {
        tieScore++;
    }


    // conditional for winner announcement
    if (playerScore > computerScore) {
        resultRowThree.textContent = ("Player WINS with a score of " + playerScore + " to " + computerScore);
        resultRowFour.textContent = ("Number of ties: " + tieScore);
    } else if (computerScore > playerScore) {
        resultRowThree.textContent = ("Player LOSES with a score of " + playerScore + " to " + computerScore);
        resultRowFour.textContent = ("Number of ties: " + tieScore);
    } else {
        resultRowThree.textContent = ("It's a TIE!!! score is " + playerScore + " to " + computerScore);
        resultRowFour.textContent = ("Number of ties: " + tieScore);
    }
}

//game();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            game(button.id);
            counter++;
        }
    });
});

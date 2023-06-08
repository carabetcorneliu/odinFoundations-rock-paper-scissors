
// the function for getting the Computer Choice
function getComputerChoice () {

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

// the function for getting playerSelection and making the insertion case insensitive
function getPlayerSelection () {
    let playerSelection = prompt("Pick your fighter - rock, paper, scissors!", "");
    return (playerSelection.toLowerCase());
}

// the function that plays 1 round of Rock-Paper-Scissors after taking 2 parameters, the playerSelection and computerSelection
function playRound (playerSelection, computerSelection) {

    console.log("You Lose! Paper beats Rock");
}

console.log("Computer Choice: " + getComputerChoice());

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
    
// announcing the fighters    
    console.log("Computer Choice: " + computerSelection);
    console.log("Player Selection: " + playerSelection);
// empty line for visibility
    console.log("");

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("Rock beats Scissors");
            console.log("Player Won, Congratulations!");
        } else if (computerSelection === "paper") {
            console.log("Player LOST, Paper beats Rock!");
        } else {            // computerSelection === "rock"
            console.log("Rock VS Rock");
            console.log("It's a TIE!!!");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Paper beats Rock");
            console.log("Player Won, Congratulations!");
        } else if (computerSelection === "scissors") {
            console.log("Player LOST, Scissors beat Paper!");
        } else {            // computerSelection === "paper"
            console.log("Paper VS Paper");
            console.log("It's a TIE!!!");
        }
    } else {                // playerSelection === "scissors"
        if (computerSelection === "paper") {
            console.log("Scissors beat Paper");
            console.log("Player Won, Congratulations!");
        } else if (computerSelection === "rock") {
            console.log("Player LOST, Rock beats Scissors!");
        } else {            // computerSelection === "paper"
            console.log("Scissors VS Scissors");
            console.log("It's a TIE!!!");
        }
    }
}

playRound(getPlayerSelection(), getComputerChoice());
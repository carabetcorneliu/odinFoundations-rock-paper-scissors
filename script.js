
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

// the function for getting playerSelection and making the insertion case insensitive
function getPlayerSelection() {
    let playerSelection = prompt("Pick your fighter - rock, paper, scissors!", "");
    return (playerSelection.toLowerCase());
}

// the function that plays 1 round of Rock-Paper-Scissors after taking 2 parameters, the playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {

    // announcing the fighters    
    console.log("Computer Choice: " + computerSelection);
    console.log("Player Selection: " + playerSelection);
    // empty line for visibility
    console.log("");

    // declaring gameResult variable for Wins counter in game
    let gameResult;

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("Rock beats Scissors");
            console.log("Player Won, Congratulations!");
            gameResult = "playerWin";
        } else if (computerSelection === "paper") {
            console.log("Player LOST, Paper beats Rock!");
            gameResult = "computerWin";
        } else {            // computerSelection === "rock"
            console.log("Rock VS Rock");
            console.log("It's a TIE!!!");
            gameResult = "tie";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Paper beats Rock");
            console.log("Player Won, Congratulations!");
            gameResult = "playerWin";
        } else if (computerSelection === "scissors") {
            console.log("Player LOST, Scissors beat Paper!");
            gameResult = "computerWin";
        } else {            // computerSelection === "paper"
            console.log("Paper VS Paper");
            console.log("It's a TIE!!!");
            gameResult = "tie";
        }
    } else {                // playerSelection === "scissors"
        if (computerSelection === "paper") {
            console.log("Scissors beat Paper");
            console.log("Player Won, Congratulations!");
            gameResult = "playerWin";
        } else if (computerSelection === "rock") {
            console.log("Player LOST, Rock beats Scissors!");
            gameResult = "computerWin"
        } else {            // computerSelection === "paper"
            console.log("Scissors VS Scissors");
            console.log("It's a TIE!!!");
            gameResult = "tie";
        }
    }

    //returning the gameResult for Game Counter
    return (gameResult);
}

// the 5 rounds Game function
function game() {
    // declaring round counter
    let counter = 1;
    // declaring score counters
    let computerScore = 0;
    let playerScore = 0;
    let tieScore = 0;

    // rounds loop
    while (counter <= 5) {
        console.log("Game Number: " + counter);
        let roundResult = playRound(getPlayerSelection(), getComputerChoice());
        if (roundResult === "playerWin") {
            playerScore++;
        } else if (roundResult === "computerWin") {
            computerScore++;
        } else {
            tieScore++;
        }
        // space for adding visibility after each game round
        console.log("");
        counter++;
    }

    // space for announcing winner
    console.log("");
    // conditional for winner announcement
    if (playerScore > computerScore) {
        console.log("Player WON with a score of " + playerScore + " to " + computerScore);
        console.log("Number of ties: " + tieScore);
    } else if (computerScore > playerScore) {
        console.log("Player LOST with a score of " + playerScore + " to " + computerScore);
        console.log("Number of ties: " + tieScore);
    } else {
        console.log("It's a TIE!!! score is " + playerScore + " to " + computerScore);
        console.log("Number of ties: " + tieScore);
    }
}

game();
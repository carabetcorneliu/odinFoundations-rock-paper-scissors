
//the function for getting the Computer Choice
function getComputerChoice () {

    //declaring the option variable, through the Math.random, multiplied by 3(because we have 3 options), rounding the number with the Math.floor function and adding +1 for visual confort
    let choice = (Math.floor(Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            return ("Rock");
        case 2:
            return ("Paper");
        case 3:
            return ("Scissors");
    }
}

console.log(getComputerChoice());
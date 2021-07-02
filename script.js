// This function gives the computer the random assignment of rock, paper, or scissors //

    // Function generates integers 0, 1, or 2 randomly

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    
    //  Function then assigns each integer either rock, paper, or scissors 
    
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return 2;
    }
}

console.log(computerPlay());

// This function allows the player to input their selection

function playerChoice() {
    let choice = prompt("Choose rock, paper, or scissors: ", "");
    choice = choice.toLowerCase();
    if (choice === "rock") {
        return 0;
    } else if (choice === "paper") {
        return 1;
    } else if (choice === "scissors") {
        return 2;
    } else {
        alert("That was not a valid option");
        playerChoice();
    }
}


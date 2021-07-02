// This function gives the computer the random assignment of rock, paper, or scissors //

    // Function generates integers 0, 1, or 2 randomly

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    
    //  Function then assigns each integer either rock, paper, or scissors 
    
    if (num === 0) {
        return "Rock!";
    } else if (num === 1) {
        return "Paper!";
    } else {
        return "Scissors!";
    }
}

console.log(computerPlay());

// This statement allows a player to input a selection

let playerSelection = prompt("Choose rock, paper, or scissors: ", "");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);


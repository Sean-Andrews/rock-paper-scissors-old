// This function gives the computer the random assignment of rock, paper, or scissors //

    // Function generates integers 0, 1, or 2 randomly

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return num;
}

// This function allows the player to input their selection
/*
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

// These statements set up the upcoming functions
*/
let score = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener('click', () => {
    playerSelection = 0;
    playRound();
});
paper.addEventListener('click', () => {
    playerSelection = 1;
    playRound();
});
scissors.addEventListener('click', () => {
    playerSelection = 2;
    playRound();
});

// This function plays a single round


function playRound() {
    let computerSelection = computerPlay();
    if (playerSelection === 0 && computerSelection === 1) {
        console.log("You lose!  Paper beats rock");
    } else if (playerSelection === 0 && computerSelection === 2) {
        score += 1;
        console.log("You win!  Rock beats scissors");
    } else if (playerSelection === 1 && computerSelection === 0) {
        score += 1;
        console.log("You win!  Paper beats rock");
    } else if (playerSelection === 1 && computerSelection === 2) {
        console.log("You lose!  Scissors beats paper");
    } else if (playerSelection === 2 && computerSelection === 0) {
        console.log("You lose!  Rock beats scissors");
    } else if (playerSelection === 2 && computerSelection === 1) {
        score += 1;
        console.log("You win!  Scissors beats paper");
    } else {
        console.log("It's a tie!");
    }
}

// This function plays a five round game and keeps score

function game() {
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score is " + score);
    computerSelection = computerPlay();
    playerSelection = playerChoice();
}

// Incorporates UI buttons



        
        
// The order of gameplay
/*
game();
game();
game();
game();
console.log(playRound());
console.log("Your score is " + score);

// A function to announce results

function result() {
    if (score >= 3) {
        return "You win!"
    } else {
        return "Better luck next time!"
    }
}

console.log(result());
*/
// This function gives the computer the random assignment of rock, paper, or scissors //

    // Function generates integers 0, 1, or 2 randomly

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return num;
}

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

// These statements set up the upcoming functions

let computerSelection = computerPlay();
let playerSelection = playerChoice();
let score = 0;

// This function plays a single round

function playRound(playerSelection, computerSelection) {
      if (playerSelection === 0 && computerSelection === 1) {
        return "You lose!  Paper beats rock";
    } else if (playerSelection === 0 && computerSelection === 2) {
        score += 1;
        return "You win!  Rock beats scissors";
    } else if (playerSelection === 1 && computerSelection === 0) {
        score += 1;
        return "You win!  Paper beats rock";
    } else if (playerSelection === 1 && computerSelection === 2) {
        return "You lose!  Scissors beats paper";
    } else if (playerSelection === 2 && computerSelection === 0) {
        return "You lose!  Rock beats scissors";
    } else if (playerSelection === 2 && computerSelection === 1) {
        score += 1;
        return "You win!  Scissors beats paper";
    } else {
        return "It's a tie!";
    }
}

// This function plays a five round game and keeps score

function game() {
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score is " + score);
    computerSelection = computerPlay();
    playerSelection = playerChoice();
}

// The order of gameplay

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

console.log(result);
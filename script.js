
let userScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".results");
const gameOver = document.querySelector(".game-over");

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return num;
}

// This function plays a single round
function playRound() {
    let computerSelection = computerPlay(); 
    if (playerSelection === 0 && computerSelection === 1) {
        computerScore += 1;
        results.textContent = `You lose! Paper beats rock.  Your score is ${ userScore } and the computer's score is ${ computerScore }.`;
    } else if (playerSelection === 0 && computerSelection === 2) {
        userScore += 1;
        results.textContent = `You win! Rock beats scissors  Your score is ${ userScore } and the computer's score is ${ computerScore }.`;
    } else if (playerSelection === 1 && computerSelection === 0) {
        userScore += 1;
        results.textContent = `You win! Paper beats rock.  Your score is ${ userScore } and the computer's score is ${ computerScore }.`;
    } else if (playerSelection === 1 && computerSelection === 2) {
        computerScore += 1;
        results.textContent = `You lose! Scissors beats paper.  Your score is ${ userScore } and the computer's score is ${ computerScore }.`;
    } else if (playerSelection === 2 && computerSelection === 0) {
        computerScore += 1;
        results.textContent = `You lose! Rock beats scissors.  Your score is ${ userScore } and the computer's score is ${ computerScore }.`;
    } else if (playerSelection === 2 && computerSelection === 1) {
        userScore += 1;
        results.textContent = `You win! Scissors beats paper.  Your score is ${ userScore } and the computer's score is ${ computerScore }.`;
    } else {
        results.textContent = `It's a tie! Your score is ${ userScore } and the computer's score is ${ computerScore }.`;
    }
    if (userScore === 5) {
    results.textContent = `Congratulations, you are a champion!`;
    } else if (computerScore === 5) {
    results.textContent = `Better luck next time!`;
    }
}

rock.addEventListener('click', () => {
    if (userScore === 5 || computerScore === 5) {
        gameOver.textContent = "Game over";
    } else {
    playerSelection = 0;
    playRound();
    }
});
paper.addEventListener('click', () => {
    if (userScore === 5 || computerScore === 5) {
        gameOver.textContent = "Game over";
    } else {
    playerSelection = 1;
    playRound();
    }
});
scissors.addEventListener('click', () => {
    if (userScore === 5 || computerScore === 5) {
        gameOver.textContent = "Game over";
    } else {
    playerSelection = 2;
    playRound();
    }
});
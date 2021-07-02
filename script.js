// This function gives the computer the random assignment of rock, paper, or scissors //

    // Function generates integers 0, 1, or 2 randomly

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    
    //  Function then assigns each integer either rock, paper, or scissors 
    
    if (num === 0) {
        console.log("Rock!");
        return rock;
    } else if (num === 1) {
        console.log("Paper!");
        return paper;
    } else {
        console.log("Scissors!")
        return scissors;
    }
}

computerPlay()
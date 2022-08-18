function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if(number == 0){
        return "Rock"
    }
    else if (number == 1){
        return "Paper"
    }
    else {
        return "Scissors"
    }
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw"
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "win"
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "win"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "win"
    }
    else {
        return "loss"
    }
}

console.log(playRound("Rock", getComputerChoice()))
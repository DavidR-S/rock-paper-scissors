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

function game() {
    let outcome;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++){
        outcome = playRound(prompt(), getComputerChoice())
        if (outcome === "win"){
            wins += 1;
        }
        else if (outcome == "loss") {
            losses += 1;
        }
        else {
            draws += 1;
        }
    }
    console.log(wins);
    console.log(losses);
    console.log(draws);
}

game();
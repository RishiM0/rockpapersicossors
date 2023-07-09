//const prompt = require("prompt-sync")();

getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    if (number == 0){
        return "rock"
    }
    else if (number == 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        //return ("Tie! " + playerSelection + " cancels " + computerSelection + "!")
        return 0;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return 1;
        //return ("Win! " + playerSelection + " beats " + computerSelection + "!")
    } else {
        return 2;
        //return ("Lose! " + playerSelection + " loses to " + computerSelection + "!")
    }
}

function points(num) {
    if (num == 0) {
        return -1
    }
}

function game() {
    let person = 0;
    let comp = 0;
    for (i = 0; i < 5; i++){
        let playerSelection = prompt("rock paper or scissors?");
        let computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection) == 1){
            person = person + 1;
            console.log("Win! " + playerSelection + " beats " + computerSelection + "!")
        } else if (playRound(playerSelection, computerSelection) == 2) {
            comp = comp + 1;
            console.log("Lose! " + playerSelection + " loses to " + computerSelection + "!")
        } else {
            person = person;
            console.log ("Tie! " + playerSelection + " cancels " + computerSelection + "!")
        }
    }
    if (person == comp) {
        return ("Complete Tie, no winner or loser. Let's keep going!")
    } else if (person > comp) {
        return ("You have won! Nicely done!")
    }
    else {
        return ("The computer has won! Try again to win!")
    }
}

console.log(game());
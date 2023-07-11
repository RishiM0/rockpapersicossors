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
        //return ("Win! " + playerSelection + " beats " + computerSelection + "!")
        return 1;
    } else {
        //return ("Lose! " + playerSelection + " loses to " + computerSelection + "!")
        return 2;
    }
}


function game() {
    console.log('got here');
    let point = 0;
    let result;
    const rockpress = document.querySelector(".rockbutton");
    const paperpress = document.querySelector(".paperbutton");
    const scissorspress = document.querySelector(".scissorsbutton");
    rockpress.addEventListener('click', () => {
        console.log('got here too');
        let playerSelection = 'rock';
        let computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection) == 1){
            point = 1;
        result = ("Win! " + playerSelection + " beats " + computerSelection + "!")
        } else if (playRound(playerSelection, computerSelection) == 2) {
            point = 2;
            result = ("Lose! " + playerSelection + " loses to " + computerSelection + "!")
        } else {
            point = 0;
            result = ("Tie! " + playerSelection + " cancels " + computerSelection + "!")
        }
        
        const div = document.querySelector(".buttons");
        const results = document.createElement('div');
        results.textContent = result;
        div.appendChild(results);

        return point;

    })
    paperpress.addEventListener('click', () => {
        console.log('got here too');
        let playerSelection = 'paper';
        let computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection) == 1){
            point  = 1;
            result = ("Win! " + playerSelection + " beats " + computerSelection + "!")
        } else if (playRound(playerSelection, computerSelection) == 2) {
            point = 2;
            result = ("Lose! " + playerSelection + " loses to " + computerSelection + "!")
        } else {
            result = ("Tie! " + playerSelection + " cancels " + computerSelection + "!")
        }
        
        const div = document.querySelector(".buttons");
        const results = document.createElement('div');
        results.textContent = result;
        div.appendChild(results);

        return point;
        
    })
    scissorspress.addEventListener('click', () => {
        console.log('got here too');
        let playerSelection = 'scissors';
        let computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection) == 1){
            point = 1;
            result = ("Win! " + playerSelection + " beats " + computerSelection + "!")
        } else if (playRound(playerSelection, computerSelection) == 2) {
            point = 2;
            result = ("Lose! " + playerSelection + " loses to " + computerSelection + "!")
        } else {
            result = ("Tie! " + playerSelection + " cancels " + computerSelection + "!")
        }
        console.log(result);
        
        const div = document.querySelector(".buttons");
        const results = document.createElement('div');
        results.textContent = result;
        div.appendChild(results);

        return point;
        
    })
    }

console.log("beginning");
let counter = 0;
let player = 0;
let comp = 0;
//while (counter < 6) {
    thePoint = game();
    counter += 1;
    if (thePoint == 1){
        player += 1;
    } else if (thePoint == 2){
        comp += 1; 
    }
    console.log("points" + player + comp)
//}

    if (player < comp) {
        console.log("The computer has won! Try again to win!")
    } else if (player > comp) {
        console.log("You have won! Nicely done!")
    }
    else {
        console.log("Complete Tie, no winner or loser. Let's keep going!")
    }
//const div = document.querySelector(".buttons");
//const results = document.createElement('div');
//results.textContent = displayString;
//div.appendChild(results);

//let displayString = game();
//console.log(displayString);

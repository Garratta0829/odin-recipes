const compChoice = document.getElementById('computer-choice')
const playerChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const buttons = document.querySelectorAll('button')
let userSelection;
let computerSelection;
// let choice;




buttons.forEach(button => button.addEventListener('click', (e) => {
        userSelection = e.target.id;
        playerChoice.innerHTML = userSelection;
        compChoice.innerHTML = getComputerChoice()
        playRound(userSelection, getComputerChoice())
       
        
    } 
       
    ))
    

function getComputerChoice() {
    let computerSelection = Math.floor((Math.random()) * 3)
        if (computerSelection == 0) {
            computerSelection = 'rock';
        } else if (computerSelection == 1) {
            computerSelection = 'paper'
        } else if (computerSelection == 2) {
            computerSelection = 'scissors'
        }
        return computerSelection
        // compChoice.innerHTML = computerSelection;

        
}




function playRound(userSelection, computerSelection) {
    let result;
    
    if (userSelection === computerSelection) {
            
            result = `You tied! ${userSelection} ties ${computerSelection}`
        
    } if ((userSelection === 'rock' && computerSelection === 'paper') ||
          (userSelection === 'paper' && computerSelection === 'scissors') ||
          (userSelection === 'scissors' && computerSelection === 'rock')) {
        
            // compCount++
            result = `You lose! ${computerSelection} beats ${userSelection}`
        
    } if ((userSelection === 'rock' && computerSelection === 'scissors') ||
          (userSelection === 'paper' && computerSelection === 'rock') ||
          (userSelection === 'scissors' && computerSelection === 'paper')){
            
            // userCount++
            result = 'You win!'
    }
    resultDisplay.innerHTML = result
}

let comptCount = 0;
let userCount = 0;

// function game() {



//     for (let i =0; i < 50; i++) {
//         playRound()
//         if (userCount == 5) {
//             return "You won the game!"
//         } else if (comptCount == 5) {
//             return "You lost the game!"
//         } else if (return value == 'you lose') {
//             comptCount ++
//         } else if (return value == 'you win') {
//             userCount ++
//         }
//     }
// }

// console.log(playRound(userSelection, computerSelection))

console.log(getComputerChoice())

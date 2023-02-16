const compChoice = document.getElementById('computer-choice')
const playerChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const buttons = document.querySelectorAll('button')
let userSelection;
let computerSelection = getComputerChoice();
let choice;




buttons.forEach(button => button.addEventListener('click', (e) => {
        userSelection = e.target.id;
        playerChoice.innerHTML = userSelection;
        getComputerChoice()
        compChoice.innerHTML = choice;
        playRound(userSelection, computerSelection)
        // playRound(userSelection, computerSelection)
        
    } 
       
    ))
    

function getComputerChoice() {
    let choice = Math.floor((Math.random()) * 3)
        if (choice == 0) {
            choice = 'rock';
        } else if (choice == 1) {
            choice = 'paper'
        } else if (choice == 2) {
            choice = 'scissors'
        }
        return choice
        
        // return choice
        
}



function playRound(userSelection, computerSelection) {
    
    
    if (userSelection === computerSelection) {
            
            resultDisplay.innerHTML = `You tied! ${userSelection} ties ${computerSelection}`
        
    } if ((userSelection === 'rock' && computerSelection === 'paper') ||
          (userSelection === 'paper' && computerSelection === 'scissors') ||
          (userSelection === 'scissors' && computerSelection === 'rock')) {
        
            // compCount++
            resultDisplay.innerHTML = `You lose! ${computerSelection} beats ${userSelection}`
        
    } if ((userSelection === 'rock' && computerSelection === 'scissors') ||
          (userSelection === 'paper' && computerSelection === 'rock') ||
          (userSelection === 'scissors' && computerSelection === 'paper')){
            
            // userCount++
            resultDisplay.innerHTML = `You win! ${userSelection} beats ${computerSelection}`
    }}

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

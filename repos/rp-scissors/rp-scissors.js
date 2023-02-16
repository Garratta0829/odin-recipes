const compChoice = document.getElementById('computer-choice')
const playerChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const buttons = document.querySelectorAll('button')
const compScore = document.getElementById('computer-score')
const userScore = document.getElementById('user-score')
const winner = document.getElementById('winner')
let userSelection;
let computerSelection;
let userCount = 0;
let compCount = 0;

// let choice;




buttons.forEach(button => button.addEventListener('click', (e) => {
        userSelection = e.target.id;
        playerChoice.innerHTML = userSelection;
        compChoice.innerHTML = getComputerChoice()
        playRound(userSelection, getComputerChoice())
        gameWon()
       
        }))
    

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
        
    // why did it not work when usercount and compcount = 0 were both stored inside the function?
    if (userSelection === computerSelection) {
            
            result = `You tied!` 
            // ${userSelection} ties ${computerSelection}
        
    } if ((userSelection === 'rock' && computerSelection === 'paper') ||
          (userSelection === 'paper' && computerSelection === 'scissors') ||
          (userSelection === 'scissors' && computerSelection === 'rock')) {
        
            compCount++
            result = `You lose!` 
            // ${computerSelection} beats ${userSelection}
        
    } if ((userSelection === 'rock' && computerSelection === 'scissors') ||
          (userSelection === 'paper' && computerSelection === 'rock') ||
          (userSelection === 'scissors' && computerSelection === 'paper')){
            
            userCount++
            result = `You win!` 
            // ${userSelection} beats ${computerSelection}
    }
    resultDisplay.innerHTML = result
    compScore.innerHTML = compCount;
    userScore.innerHTML = userCount;
}

function gameWon() {
    if (userScore.innerText == 5) {
        winner.innerHTML = 'You won the game!'
    } else if (compScore.innerText == 5) {
        winner.innerHTML = 'You lost the game'
    }
}

// function updateScore() {
    

//     for (let i = 0; i < 10; i++)
//     if (resultDisplay.innerHTML == 'You win!') {
//         userCount += 1
//     } else if (resultDisplay.innerHTML == 'You lose!') {
//         compCount += 1
//     }

//     compScore.innerHTML = compCount;
//     userScore.innerHTML = userCount;
// }

// let comptCount = 0;
// let userCount = 0;

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

// console.log(getComputerChoice())

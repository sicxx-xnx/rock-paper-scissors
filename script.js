let computerPlayerSelection ;
let humanChoice ;
let humanScore = 0
let computerScore = 0   
let computerChoice ;
const playField = document.querySelector(".play-field")
const playerChoseRock = document.querySelector(".player-chose-rock")
const playerChosePaper = document.querySelector(".player-chose-paper")
const playerChoseScissors = document.querySelector(".player-chose-scissors")
let pcChoseRock = document.querySelector(".pc-chose-rock")
const pcChosePaper = document.querySelector(".pc-chose-paper")
const pcChoseScissors = document.querySelector(".pc-chose-scissors")
const playerchoice = document.querySelector(".chooseYourWeapon")
const rockInput = document.querySelector("#rockInput")
const paperInput = document.querySelector(".paperInput")
const scissorsInput = document.querySelector(".scissorsInput")
const scoreBoard = document.querySelector(".scoreBoard")
const playerScore = document.querySelector(".playerScoretxt")
const pcScore = document.querySelector(".computerScoretxt")
const gamelog = document.querySelector(".gamelog")





playerchoice.addEventListener("click", getHumanChoice)


function getComputerChoice() {
let computerChoiceLogic = Math.random()
if (computerChoiceLogic <= 0.33 ) {    
computerPlayerSelection = "rock" 
    pcChoseRock.style.display = "block"
    pcChosePaper.style.display = "none"
    pcChoseScissors.style.display = "none"
  return computerPlayerSelection = "rock" 
} else if (computerChoiceLogic > 0.33 && computerChoiceLogic <= 0.66) {
    pcChoseRock.style.display = "none"
    pcChosePaper.style.display = "block"
    pcChoseScissors.style.display = "none"  
  return computerPlayerSelection = "paper"  
} else if (computerChoiceLogic > 0.66) {
    pcChoseRock.style.display = "none"
    pcChosePaper.style.display = "none"
    pcChoseScissors.style.display = "block "
  return computerPlayerSelection = "scissors"  
} else { computerPlayerSelection = "Something went wrong try again"    
} {    
} {    
}  
}



function getHumanChoice(event) {
target = event.target
switch (target.id) {
    case "rockInput":
    humanChoice = "rock" 
    playerChoseRock.style.display = "block"
    playerChosePaper.style.display = "none"
    playerChoseScissors.style.display = "none"   
        break;
    case "paperInput":
    humanChoice = "paper"
        playerChoseRock.style.display = "none"
    playerChosePaper.style.display = "block"
    playerChoseScissors.style.display = "none"       
        break;    
    case "scissorsInput":
    humanChoice = "scissors" 
        playerChoseRock.style.display = "none"
    playerChosePaper.style.display = "none"
    playerChoseScissors.style.display = "block"      
        break;
    default:
     humanChoice = "unknown"   
        break;
}
getComputerChoice()
playRound(humanChoice,computerPlayerSelection)

if (humanScore === 5) {
 alert("You Win")
 humanScore = 0
 computerScore = 0
}
 if (computerScore === 5) {
 alert("You lose")
 humanScore = 0
 computerScore = 0 
}
 playerScore.textContent = `${humanScore}`
 pcScore.textContent = `${computerScore}`


 
function playRound(humanChoice,computerChoice) {
if (humanChoice === computerChoice) {
    gamelog.textContent = "its a tie!"   
}  else if (humanChoice === "rock" && computerChoice === "scissors") {
gamelog.textContent = `You Win ${humanChoice} beats ${computerChoice}!`
++humanScore
}  else if (humanChoice === "paper" && computerChoice === "rock") {
gamelog.textContent = `You Win ${humanChoice} beats ${computerChoice}!`
++humanScore
}   else if (humanChoice === "scissors" && computerChoice === "paper") {
gamelog.textContent = `You Win ${humanChoice} beats ${computerChoice}!`
++humanScore
}  else {++computerScore ; gamelog.textContent = `You Lose! ${computerChoice} bests ${humanChoice}`   
} 
}
}


function playgame() {
 playRound()
 playRound()
 playRound()
 playRound()
 playRound()  

 if (humanScore > computerScore) {
    alert("you won the game!")
 } else if (humanScore < computerScore) {
    alert("you lose this one, Try again")
 } else {
    alert("its a tie")
 } {
    
 }
}
function startGame() {
playgame()
humanScore = 0
computerScore = 0 }   

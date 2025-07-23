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
        break;
    case "paperInput":
    humanChoice = "paper"    
        break;    
    case "scissorsInput":
    humanChoice = "scissors"    
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

function playRound(humanChoice,computerChoice) {

if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("its a tie!")
    console.log("player score: " + humanScore)
    console.log("compputer score: " + computerScore)    
} else if (humanChoice === "rock" && computerChoice === "paper") {
     console.log("You Lose!")
       console.log("player score: " + humanScore)
    console.log("compputer score: " + ++computerScore)  
} else if (humanChoice === "rock" && computerChoice === "scissors") {
     console.log('You win!')
       console.log("player score: " + ++humanScore)
    console.log("compputer score: " + computerScore)  
} else if (humanChoice === "paper" && computerChoice === "paper" ) {
     console.log("its a tie") 
       console.log("player score: " + humanScore)
    console.log("compputer score: " + computerScore)  
} else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("you win!")
    console.log("player score: " + ++humanScore)
    console.log("compputer score: " + computerScore)  
} else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("you lose!")
    console.log("player score: " + humanScore)
    console.log("compputer score: " + ++computerScore)  
} else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("its a tie") 
    console.log("player score: " + humanScore)
    console.log("compputer score: " + computerScore)   
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("you win!")
    console.log("player score: " + ++humanScore)
    console.log("compputer score: " + computerScore) 
} else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose!")
    console.log("player score: " + humanScore)
    console.log("compputer score: " + ++computerScore) 
} else {
    
} {
    
} {
    
} {
    
} {
    
}{
    
} {
    
} {
    
} {
    
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

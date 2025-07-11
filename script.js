let computerPlayerSelection ;
let humanChoice ;
let humanScore = 0
let computerScore = 0   
let computerChoice ;


function getComputerChoice() {
let computerChoiceLogic = Math.random()
if (computerChoiceLogic <= 0.33 ) {
return computerPlayerSelection = "rock"    
} else if (computerChoiceLogic > 0.33 && computerChoiceLogic <= 0.66) {
  return computerPlayerSelection = "paper"  
} else if (computerChoiceLogic > 0.66) {
  return computerPlayerSelection = "Scissors"  
} else { computerPlayerSelection = "Something went wrong try again"    
} {    
} {    
}  
}
function getHumanChoice() {
humanChoice = prompt("choose rock, paper, or Scissors!")    
    return humanChoice
}

function playRound(humanChoice,computerChoice) {
humanChoice = getHumanChoice()  
computerChoice = getComputerChoice()
humanChoice.toLowerCase()
computerChoice.toLowerCase()
console.log(humanChoice)
console.log(computerChoice) 
if (humanChoice === "rock" && computerChoice === "rock") {
    return console.log("its a tie!")    
} else if (humanChoice === "rock" && computerChoice === "paper") {
    return console.log("You Lose!")
} else if (humanChoice === "rock" && computerChoice === "scissors") {
    return console.log('You win!')
} else if (humanChoice === "paper" && computerChoice === "paper" ) {
    return console.log("its a tie") 
} else {
    
} {
    
} {
    
} {
    
} 
}


function test() {
    getComputerChoice()
    getHumanChoice()
    console.log(computerPlayerSelection)
    console.log(humanChoice)
}
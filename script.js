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
  return computerPlayerSelection = "scissors"  
} else { computerPlayerSelection = "Something went wrong try again"    
} {    
} {    
}  
}
function getHumanChoice() {
humanChoice = prompt("choose rock, paper, or scissors!")    
    return humanChoice
}

function playRound(humanChoice,computerChoice) {
humanChoice = getHumanChoice()  
computerChoice = getComputerChoice()
humanChoice = humanChoice.toLowerCase()
console.log(humanChoice)
console.log(computerChoice) 
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
} else if (condition) {
    
} else {
    
} {
    
} {
    
}{
    
} {
    
} {
    
} {
    
} 
}


function playgame() {
 playRound()
 playRound()
 playRound()
 playRound()
 playRound()  
}
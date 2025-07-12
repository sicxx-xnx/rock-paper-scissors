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
console.log("player chose : " + humanChoice)
console.log("computer chose : " + computerChoice) 
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
function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

let Choice = getComputerChoice(3)
console.log(Choice)

function TranslateComputerChoice(){
   if (Choice === 0) {
    return "rock"
   }
   else if (Choice === 1) {
    return "paper"
   }
   else if (Choice === 2) {
    return "scissors"
   }
}

console.log(TranslateComputerChoice())

function getHumanChoice(){
    let HumanChoice = prompt("Write Rock, Paper or Scissors");
    if (HumanChoice == "Rock"){
        return "rock"
    }
    else if (HumanChoice == "Paper"){
        return "paper"
    }
    else if (HumanChoice == "Scissors"){
        return "scissors"
    }
}

console.log(getHumanChoice())

let HumanScore = 0
let ComputerScore = 0

function playRound(Choice, HumanChoice){
    
}
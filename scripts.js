function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}



function TranslateComputerChoice(){
    let Choice = getComputerChoice(3);
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

function getHumanChoice(){
    let HumanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    if (HumanChoice === "rock"){
        return "rock"
    }
    else if (HumanChoice === "paper"){
        return "paper"
    }
    else if (HumanChoice === "scissors"){
        return "scissors"
    }
}

function playRound(HumanScore, ComputerScore){
    const humanSelection = getHumanChoice();
    let computerSelection = TranslateComputerChoice();
    if (humanSelection == "rock" && computerSelection == "rock"){
        return {result: "Draw", HumanScore, ComputerScore}
    }
    else if (humanSelection == "rock" && computerSelection == "paper"){
        ComputerScore = ComputerScore + 1;
        return {result: "You lose! Paper beats rock", HumanScore, ComputerScore}
    }
    else if (humanSelection == "rock" && computerSelection == "scissors"){
        HumanScore = HumanScore + 1;
        return {result: "You win! Rock beats scissors", HumanScore, ComputerScore}
    }
    else if (humanSelection == "paper" && computerSelection == "paper"){
        return {result: "Draw", HumanScore, ComputerScore}
    }
    else if (humanSelection == "paper" && computerSelection == "scissors"){
        ComputerScore = ComputerScore + 1;
        return {result: "You lose! Scissors beats paper", HumanScore, ComputerScore}
    }
    else if (humanSelection == "paper" && computerSelection == "rock"){
        HumanScore = HumanScore + 1;
        return {result: "You win! Paper beats rock", HumanScore, ComputerScore}
    }
    else if (humanSelection == "scissors" && computerSelection == "scissors"){
        return {result: "Draw", HumanScore, ComputerScore}
    }
    else if (humanSelection == "scissors" && computerSelection == "rock"){
        ComputerScore = ComputerScore + 1;
        return {result: "You lose! Rock beats scissors", HumanScore, ComputerScore}
    }
    else if (humanSelection == "scissors" && computerSelection == "paper"){
        HumanScore = HumanScore + 1;
        return {result: "You win! Scissors beats paper", HumanScore, ComputerScore}
    }
}

function playGame(){
    let HumanScore = 0;
    let ComputerScore = 0;
    
    for (let i = 0; i < 5; i++){
        const roundResult = playRound(HumanScore, ComputerScore);
        console.log("Round " + (i + 1) + ": " + roundResult.result);
        HumanScore = roundResult.HumanScore;
        ComputerScore = roundResult.ComputerScore;
    }
    console.log("Final Score - Human: " + HumanScore + ", Computer: " + ComputerScore);
    return "Game Over!";
}

console.log(playGame())

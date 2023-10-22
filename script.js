function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3 + 1);
    let choice = (randInt === 1) ? "Rock" : (randInt === 2) ? "Paper" : "Scissors";
    return choice;
}

function playRound(pChoice,cChoice) {
    let cleanPChoice = pChoice.toLowerCase();
    let cleanCChoice = cChoice.toLowerCase();
    let loseTo;
    let winTo;
    let winStatement = "You win!";
    let lossStatement = "You lose :(";
    let tieStatement = "It's a tie? o.O";
    switch (cleanPChoice) {
        case "rock":
            loseTo = "paper";
            winTo = "scissors";
        break;

        case "paper":
            loseTo = "scissors";
            winTo = "rock";
        break;

        case "scissors":
            loseTo = "rock";
            winTo = "paper";
        break;

        default:
            console.log("please type 'rock', 'paper', or 'scissors'");
    }
    if(cleanCChoice == loseTo) {
        return lossStatement;
    } else if (cleanCChoice == winTo) {
        return winStatement;
    } else {
        return tieStatement;
    }
}
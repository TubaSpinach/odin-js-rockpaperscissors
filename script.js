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

    let winStatement = `You win! ${cleanPChoice} beats ${winTo}`;
    let lossStatement = `You lose :( ${loseTo} beats ${cleanPChoice}`;
    let tieStatement = "It's a tie? o.O";

    if(cleanCChoice == loseTo) {
        return [0,1];
    } else if (cleanCChoice == winTo) {
        return [1,0];
    } else {
        return [0,0];
    }
}

function game() {
    let pScore = 0
    let cScore = 0
    for(let i = 0; i < 5; i++) {
        let pC = prompt("What're you picking?", "Rock, Paper, Scissors");
        let cC = getComputerChoice();
        let results = playRound(pC,cC);
        console.log(`Round ${i}: ${pC} vs ${cC}`);
        pScore += results[0];
        cScore += results[1];
        console.log(`Round ${i}: player: ${pScore}; computer: ${cScore}`);
    }
    if(pScore > cScore) {
        console.log(`player wins! ${pScore} to ${cScore}`);
    } else if (pScore == cScore) {
        console.log(`tie! ${pScore} to ${cScore}`);
    } else {
        console.log(`computer wins! ${cScore} to ${pScore}`);
    }
    return true;
}

const entrybox = document.querySelector('.entrybox');

const redP = document.createElement('p');
redP.style.color = 'red';
redP.textContent = "Hey I'm red!";

const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = "I'm a blue h3!";

const blackDiv = document.createElement('div');
blackDiv.style.cssText = "background-color: pink; border-style: solid; border-color: black;"

const h1Div = document.createElement('h1');
h1Div.textContent = "I'm in a div";

const pDiv = document.createElement('p');
pDiv.textContent = "ME TOO!";

blackDiv.appendChild(h1Div);
blackDiv.appendChild(pDiv);

entrybox.appendChild(redP);
entrybox.appendChild(blueH3);
entrybox.appendChild(blackDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("onclick propert ftw!");
const evebtn = document.querySelector('#evebtn');
evebtn.addEventListener('click', ()=> {
    alert("event listener ftw");
});
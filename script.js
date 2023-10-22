function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3 + 1);
    console.log(randInt)
    let choice = (randInt === 1) ? "Rock" : (randInt === 2) ? "Paper" : "Scissors";
    return choice
}

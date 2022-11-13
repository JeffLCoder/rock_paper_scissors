//keep the scores
const scoreRecords = [];
let computerScore = 0, playerScore = 0;
//generate random input from computer
const choices = ['rock', 'paper', 'scissors'];
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
// const computerSelection = getComputerChoice();

//get input from player
const getPlayerSelection = () => {
    const selection = prompt('Please input your choice: rock, paper or scissors?');
    //reject if the input from user is none of the 3 words
    const playerSelection = selection.trim().toLowerCase();
    if (choices.includes(playerSelection)) return playerSelection;
    //return undefined if play's input is invalid
    alert('Invalid input!');
    return;
}
// const playerSelection = getPlayerSelection();

//one round of the game
function playRound(playerSelection, computerSelection) {
    //check if player's input is valid, otherwise interrupt the process
    if (playerSelection) {
        // rock=0, paper=1, scissors=2, player wins only if the remainder is 1 or -2
        switch (choices.indexOf(playerSelection) - choices.indexOf(computerSelection)) {
            case 0:
                console.log('Draw!');
                scoreRecords.push({ 'computer': computerSelection, 'player': playerSelection, 'winner': 'none' });
                break;
            case 1:
            case -2:
                console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
                scoreRecords.push({ 'computer': computerSelection, 'player': playerSelection, 'winner': 'player' });
                playerScore += 1;
                break;
            default:
                console.log(`You lose! ${playerSelection} beats ${computerSelection}!`);
                scoreRecords.push({ 'computer': computerSelection, 'player': playerSelection, 'winner': 'computer' })
                computerScore += 1;
        }
    }
    return
}

//play the game for 5 rounds
function game(num) {
    for (let i = 0; i < num; i++) {
        playRound(getPlayerSelection(), getComputerChoice());
        if (computerScore > 2 || playerScore > 2) break;
    }
    console.log(`Player vs Computer - ${playerScore} : ${computerScore}`)
}


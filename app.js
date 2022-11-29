//keep the scores
const scoreRecords = [];
let computerScore = 0, playerScore = 0;
//generate random input from computer
const choices = ['rock', 'paper', 'scissors'];
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

//get input from player

// const getPlayerSelection = () => {
// addEventListener to each button
//return the value of the button


//one round of the game
function playRound(e) {

    const playerSelection = e.target.name;
    const computerSelection = getComputerChoice();
    announcement.appendChild(announce);
    // rock=0, paper=1, scissors=2, player wins only if the remainder is 1 or -2
    switch (choices.indexOf(playerSelection) - choices.indexOf(computerSelection)) {
        case 0:
            announce.textContent = 'Draw!';
            scoreRecords.push({ 'computer': computerSelection, 'player': playerSelection, 'winner': 'none' });
            break;
        case 1:
        case -2:
            announce.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
            scoreRecords.push({ 'computer': computerSelection, 'player': playerSelection, 'winner': 'player' });
            playerScore += 1;
            break;
        default:
            announce.textContent = `You lose! ${playerSelection} beats ${computerSelection}!`;
            scoreRecords.push({ 'computer': computerSelection, 'player': playerSelection, 'winner': 'computer' })
            computerScore += 1;
    }

}

const announce = document.createElement('p');
const announcement = document.querySelector('.announcement');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', playRound)
})
//play the game for 5 rounds

/*
function game(num) {
    // the text of announcement
    const announceText = document.createElement('p');
    const announcement = document.querySelector('.announcement');
    for (let i = 0; i < num; i++) {
        playRound(getPlayerSelection(), getComputerChoice());
        if (computerScore > 2 || playerScore > 2) break;
    }
    announceText.textContent = `Player vs Computer - ${playerScore} : ${computerScore}`
    announcement.appendChild(announceText);
}

game(5);
*/

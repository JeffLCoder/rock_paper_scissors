//keep the scores
const scoreRecords = [];
let computerScore = 0, playerScore = 0;

const announce = document.createElement('p');
const scores = document.createElement('p');
const announcement = document.querySelector('.announcement');
const topHeadline = document.querySelector('#top-headline');
const buttons = document.querySelectorAll('.button');
let clickCount = 1;
let num = 5;

//generate random input from computer
const choices = ['rock', 'paper', 'scissors'];
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

//one round of the game
function playRound(e) {
    console.log(e);
    const playerSelection = e.target.dataset.name;
    const computerSelection = getComputerChoice();

    if (clickCount > num) {
        announce.textContent = `${num} Rounds!`;
        return
    }
    announcement.appendChild(announce);
    announcement.appendChild(scores);
    // rock=0, paper=1, scissors=2, player wins only if the difference is 1 or -2
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
            announce.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
            scoreRecords.push({ 'computer': computerSelection, 'player': playerSelection, 'winner': 'computer' })
            computerScore += 1;
    }
    scores.textContent = `Player vs Computer - ${playerScore} : ${computerScore}`


    topHeadline.textContent = (`Round Number ${++clickCount > 5 ? 5 : clickCount}:`);
}


buttons.forEach(button => {
    button.addEventListener('click', playRound);

})

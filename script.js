'use strict';

// ~~~~PROJECT 1 - GUESS GAME~~~~

let secretNumber = randomNumber();
let score = document.querySelector('.score').textContent;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = document.querySelector('.score');
const displayNumber = document.querySelector('.number');
const inputGuessNumber = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
let isPlaying = true;
console.log(secretNumber);

function randomNumber() {
  return Math.trunc(Math.random() * 20 + 1)
}

// Check button
checkBtn.addEventListener('click', function () {
  if (isPlaying) {
    const guess = Number(inputGuessNumber.value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
      displayMessage('No number! 🙁');

      // When number is not between interval game
    } else if (guess < 1 || guess > 20) {
      displayMessage('You have to choose between 1 and 20 🙁');

      // When player wins
    } else if (guess === secretNumber) {
      isPlaying = false;
      displayNumber.textContent = secretNumber;
      displayMessage('Correct number!😊');

      // Green background
      document.querySelector('body').style.backgroundColor = 'green';
      displayNumber.style.width = '30rem';

      // Highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      // Guess is too low or too high
    } else if (guess !== secretNumber) {
      if (score > 0 && guess !== secretNumber) {
        displayMessage(guess < secretNumber ? 'Too low👎' : 'Too high👍');
        score--;
        displayScore.textContent = score;
      } else {
        displayMessage('Score 0. You lost the game 🙁');
      }
    }
  }
});

// Again button
resetBtn.addEventListener('click', function () {
  isPlaying = true;
  secretNumber = randomNumber();
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';

  displayScore.textContent = '20';
  score = 20;
  displayNumber.textContent = '?';
  displayNumber.style.width = '15rem';
  inputGuessNumber.value = '';
  displayMessage('Start guessing...');
});

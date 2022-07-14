'use strict';

// ~~~~PROJECT 1 - GUESS GAME~~~~

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = document.querySelector('.score').textContent;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = document.querySelector('.score');
const displayNumber = document.querySelector('.number');
const inputGuessNumber = document.querySelector('.guess');
let playing = true;
console.log(secretNumber);

// Check button
document.querySelector('.check').addEventListener('click', function () {
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
      displayMessage('No number! 🙁');

      // When number is not between interval game
    } else if (guess < 1 || guess > 20) {
      displayMessage('You have to choose between 1 and 20 🙁');

      // When player wins
    } else if (guess === secretNumber) {
      playing = false;
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('Correct number!😊');

      // Green background
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';

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
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';

  displayScore.textContent = '20';
  score = 20;
  displayNumber.textContent = '?';
  displayNumber.style.width = '15rem';
  inputGuessNumber.value = '';
  displayMessage('Start guessing...');
});

// When number guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       message.textContent = 'Too low👎';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       message.textContent = 'Score 0. You lost the game 🙁';
//     }

//     // When number guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 0) {
//       message.textContent = 'Too high👍';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       message.textContent = 'Score 0. You lost the game 🙁';
//     }
//   }

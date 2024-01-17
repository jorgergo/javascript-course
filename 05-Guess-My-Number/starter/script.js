'use strict';

let secretNumber = Math.round(Math.random() * 20);

let score = 20;
let highscore = 0;

const updateMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const updateSecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const updateCSS = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // There is no input
  if (!guess) {
    updateMessage('⛔ No number!');
    return;
  }

  // When player wins
  else if (guess === secretNumber) {
    updateMessage('🎉 Correct Number!');
    // updates highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Shows secret number
    updateSecretNumber(secretNumber);

    // CSS changes
    updateCSS('#60b347', '30rem');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      updateMessage(`${guess > secretNumber ? '📈 Too high!' : '📉 Too low!'}`);
      score -= 1;
      updateScore(score);
    } else {
      updateMessage('💥 You lost the game!');
      updateScore(0);
    }
  }
  // When the input is wrong
  else updateMessage('Check your input...');
});

// Reset the game
document.querySelector('.btn.again').addEventListener('click', function () {
  // RESETS SECRET NUMBER
  secretNumber = Math.round(Math.random() * 20);
  // CSS
  updateCSS('#222', '15rem');
  // RESETS MESSAGE
  updateMessage('Start guessing...');
  // RESETS SECRET NUMBER IN DOM
  updateSecretNumber('?');
  // RESETS SCORE
  score = 20;
  updateScore(score);
  // RESETS GUESS
  document.querySelector('.guess').value = '';
});

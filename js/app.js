"use strict";

const guessMessage = document.getElementById('guess-message');
const currentGuess = document.getElementById('current-guess');
const computerGuess = document.getElementById('computer-guess');
const guessHistory = document.getElementById('guess-history');
const submit = document.getElementById('submit-btn');
const restart = document.getElementById('restart-btn');

let number = Math.floor(Math.random() * 10) + 1;

let guesses = [];


submit.addEventListener('click', () => {
    const guess = document.getElementById('guess-input').value;

    currentGuess.innerHTML = guess;
    guesses.push(guess);
    guessHistory.innerHTML = guesses;

    if (guess == number) {
        guessMessage.innerHTML = 'Nailed it!';
    } else if (guess > number) {
        guessMessage.innerHTML = 'Too high!';
    } else if (guess < number) {
        guessMessage.innerHTML = 'Too low!';
    }

    if (guesses.length >= 3 || guess == number) {
        computerGuess.innerHTML = number;
        submit.disabled = true;
        restart.disabled = false;
    }
});

restart.addEventListener('click', () => {
    // An easy out would be to just refresh the page...
    number = Math.floor(Math.random() * 10) + 1;

    currentGuess.innerHTML = '';
    guessMessage.innerHTML = '';
    computerGuess.innerHTML = '';
    guessHistory.innerHTML = '';

    guesses = [];

    submit.disabled = false;
    restart.disabled = true;
});

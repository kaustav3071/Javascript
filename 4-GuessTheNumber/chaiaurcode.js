// Generate a random number between 1 and 100
let randomNum = Math.floor(Math.random() * 100 + 1);

// DOM element references
const submit = document.getElementById('subt');
const userNum = document.getElementById('guessField');
const userPrev = document.querySelector('.guesses');
const GuessRem = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// Element for the new game button
const p = document.createElement('p');

// Game variables
let prevGuess = [];
let GuessNum = 1; // Tracks the number of guesses
let playGame = true; // Flag to control the game's state

// Add event listener to the submit button
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
    const userInput = parseInt(userNum.value); // Get the user's input
    validateGuess(userInput); // Validate and process the guess
  });
}

// Validate the user's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Not a number, please check.'); // Alert for non-numeric input
  } else if (guess < 1) {
    alert('Number must be at least 1.'); // Alert for guesses below 1
  } else if (guess > 100) {
    alert('Number must be at most 100.'); // Alert for guesses above 100
  } else {
    prevGuess.push(guess); // Add the guess to the array of previous guesses
    displayGuess(guess); // Display the guess
    GuessRem.innerHTML = `${10 - GuessNum}`; // Update remaining guesses
    if (GuessNum >= 10) {
      // Game over condition
      displayMessage(`Game Over! The random number was ${randomNum}.`);
      endGame();
    } else {
      checkGuess(guess); // Check if the guess is correct
      GuessNum++; // Increment guess count
    }
  }
}

// Check if the guess matches the random number
function checkGuess(guess) {
  if (guess > randomNum) {
    displayMessage("Number is too high...");
  } else if (guess === randomNum) {
    displayMessage("You guessed it right! 🎉");
    endGame(); // End the game if the guess is correct
  } else {
    displayMessage("Number is too low...");
  }
}

// Display the guess in the UI
function displayGuess(guess) {
  userNum.value = ''; // Clear the input field
  userPrev.innerHTML += `${guess}, `; // Append the guess to the previous guesses
}

// Display a message in the low/high message area
function displayMessage(message) {
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}

// End the game and provide an option to restart
function endGame() {
  userNum.value = ''; // Clear input field
  userNum.setAttribute('disabled', ''); // Disable input field
  submit.setAttribute('disabled', ''); // Disable submit button

  // Create a "New Game" button
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);

  playGame = false; // Set the game state to false

  // Add event listener to the "New Game" button
  document.getElementById('newGame').addEventListener('click', newGame);
}

// Reset the game for a new round
function newGame() {
  // Reset game variables
  GuessNum = 1;
  prevGuess = [];
  playGame = true;

  // Enable input field and submit button
  userNum.removeAttribute('disabled');
  submit.removeAttribute('disabled');

  // Reset UI elements
  userNum.value = '';
  userPrev.textContent = ''; // Clear previous guesses
  GuessRem.textContent = '10'; // Reset remaining guesses
  lowHigh.innerHTML = ''; // Clear messages
  startOver.removeChild(p); // Remove the "New Game" button

  // Generate a new random number
  randomNum = Math.floor(Math.random() * 100 + 1);
}

// Problem-1 Page Scroll korle niche ase, Hidden hoi nah
// Problem-2 Button e Click korle CSS design Nosto hoi a jai
// Arekta jinish Reload korelew Data Input e thake

//Player1 Name
let nameInput = document.getElementById('nameInput');
let startGameBtn = document.getElementById('startGameBtn');
let errorMsg = document.getElementById('errorMsg');
let startScreen = document.getElementById('startScreen');
//Player1 Name
startGameBtn.addEventListener('click', () => {
  if (nameInput.value == '') {
    errorMsg.removeAttribute('hidden');
  } else {
    errorMsg.setAttribute('hidden', true);
    startScreen.style.display = 'none';
    playerOne.removeAttribute('hidden');
    playerOne.style.display = 'block';
    playerOneTittle.innerText = nameInput.value;
  }
});
//Player1 Number
let playerOne = document.getElementById('playerOne');
let playerOneTittle = document.getElementById('playerOneTittle');
let playerOneInput = document.getElementById('playerOneInput');
let playerOneBtn = document.getElementById('playerOneBtn');
let playerOneError = document.getElementById('playerOneError');
//Player1 Number
playerOneBtn.addEventListener('click', () => {
  if (playerOneInput.value == '') {
    playerOneError.removeAttribute('hidden');
  } else {
    playerOneError.setAttribute('hidden', true);
    playerOne.style.display = 'none';
    playerTwoName.removeAttribute('hidden');
    playerTwoName.style.display = 'block';
  }
});
//Player2 Name
let playerTwoName = document.getElementById('playerTwoName');
let playerTwoNameInput = document.getElementById('playerTwoNameInput');
let playerTwoNameBtn = document.getElementById('playerTwoNameBtn');
let playerTwoNameError = document.getElementById('playerTwoNameError');
//Player2 Name
playerTwoNameBtn.addEventListener('click', () => {
  if (playerTwoNameInput.value == '') {
    playerTwoNameError.removeAttribute('hidden');
  } else {
    playerTwoNameError.setAttribute('hidden', true);
    playerTwoName.style.display = 'none';
    playerTwo.removeAttribute('hidden');
    playerTwo.style.display = 'block';
    playerTwoTittle.innerText = playerTwoNameInput.value;
  }
});
//Player2 Number
let playerTwo = document.getElementById('playerTwo');
let playerTwoTittle = document.getElementById('playerTwoTittle');
let playerTwoInput = document.getElementById('playerTwoInput');
let playerTwoBtn = document.getElementById('playerTwoBtn');
let playerTwoError = document.getElementById('playerTwoError');
// Result
let gameOver = document.getElementById('gameOver');
let gameOverTittle = document.getElementById('gameOverTittle');
//Player2 Number & Result
playerTwoBtn.addEventListener('click', () => {
  if (playerTwoInput.value == '') {
    playerTwoError.removeAttribute('hidden');
  } else {
    playerTwoError.setAttribute('hidden', true);
    playerTwo.style.display = 'none';
    gameOver.removeAttribute('hidden');
    gameOver.style.display = 'block';
    if (playerOneInput.value == playerTwoInput.value) {
      gameOverTittle.innerText = `${playerTwoNameInput.value} is the winner....!`;
    } else {
      gameOverTittle.innerText = `${nameInput.value} is the winner....!`;
    }
  }
});

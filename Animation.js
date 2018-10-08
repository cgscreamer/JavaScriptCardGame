const cards = document.querySelectorAll('.memory_card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
/*
function timeTheGame(){

}
*/
// the function which handles the input field logic
function getUserName() {
    var playerName = document.getElementById('playerName').value;
    var result = document.getElementById('result');

    if (playerName.length < 3) {
        result.textContent = 'Your name must be at least three(3) characters long';
        //alert('Username must contain at least 3 characters');
    }
    else if (playerName.length > 10) {
        result.textContent = 'Just your First Name, not your life story';
    }
    else {
        result.textContent = 'Awesome! Welcome to the game, ' + playerName + '!';

// 2. Append somewhere
        document.getElementById("result")[0];
result.appendChild(button);
        //alert(playerName);

    }
}
var button = document.createElement("button");
button.innerHTML = "Let's Start!";
button.addEventListener('click', function() {
  window.open("Round_One.html");
});
// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false);

/* Do the following:
-ask user if they want to proceed
-hide window
-create a 'let's start' subButton
*/

//the card array
const cards = document.querySelectorAll('.memory_card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  //flips the cards so as they are visible
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
//once the first card has flipped starts checking the next clicked card for a match
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  //checks to see if the first and second flipped card are matched
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  //while cards a re flipped stops the interactive behaviour until a match is attempted
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    //sets a timer for how long the cards remain flipped for if they are not a matching pair
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);
}

function resetBoard() {
  //flips cards back if they are not a match
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  //shuffles the cards so as they appear randomly and the order changes on refresh
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();
cards.forEach(card => card.addEventListener('click', flipCard));
//allows the cards to be flipped

function timeTheGame(){

}

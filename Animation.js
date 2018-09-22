const cards = document.querySelectorAll('.memory_card');
/*sets default behaviours*/
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard()
/*sets the behaviour for flipping cards*/ {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
<<<<<<< HEAD

    return;
=======
  } else {
    // second click
    hasFlippedCard = false;
    secondCard = this;

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      // it's a match!
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    } else {
      // not a match
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      }, 500);
    }
>>>>>>> 63c1e5550759469479a6c44537561d6078e57c86
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch()
/*checks if cards match */
{
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  /*unflips cards that do not match */
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  /* makes sure that the cards don't get stuck if clicked twice */
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  /*Shuffles the order of the deck*/
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

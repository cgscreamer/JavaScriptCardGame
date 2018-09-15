// array for the cards
const cards = document.querySelectorAll('.memory_card');

function flipCard(){
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
/*
const roundOneCardsArray = [
  {
    'name': 'PrincessPeach'
    'img' : 'graphics/Round_One/PrincessPeach.png'
  },
  {
    'name': 'SuperMario'
    'img' : 'graphics/Round_One/Super_Mario.png'
  },
  {
    'name': 'Toad'
    'img' : 'graphics/Round_One/Toad.png'
  },
  {
    'name': 'Luigi'
    'img' : 'graphics/Round_One/Luigi.png'
  },
];

var ul = document.querySelector('ul');
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
*/

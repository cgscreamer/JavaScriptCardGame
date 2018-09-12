// deck of all cards in game
const deck = document.getElementById("card-deck");

//Array containing all of the cards

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

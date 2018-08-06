var compScore;
var userScore;
var wins = 0;
var losses = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function initializeGame() {
compScore = getRandomArbitrary(19, 120);
userScore = 0;
crystal1 = getRandomArbitrary(1, 12);
crystal2 = getRandomArbitrary(1, 12);
crystal3 = getRandomArbitrary(1, 12);
crystal4 = getRandomArbitrary(1, 12);
}

function updateDom() {
  $('#compScore').text(compScore);
  $('#userScore').text(userScore);
}

initializeGame();
updateDom();
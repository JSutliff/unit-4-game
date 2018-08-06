var compScore = getRandomArbitrary(19, 120);
var userScore;
var wins = 0;
var losses = 0;
var crystal1 = getRandomArbitrary(1, 12);
var crystal2 = getRandomArbitrary(1, 12);
var crystal3 = getRandomArbitrary(1, 12);
var crystal4 = getRandomArbitrary(1, 12);

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function updateDom() {
  $('#compScore').text(compScore);
  
}


updateDom();
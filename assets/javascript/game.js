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
$('#crystal-1').attr('value', crystal1);
crystal2 = getRandomArbitrary(1, 12);
$('#crystal-2').attr('value', crystal2);
crystal3 = getRandomArbitrary(1, 12);
$('#crystal-3').attr('value', crystal3);
crystal4 = getRandomArbitrary(1, 12);
$('#crystal-4').attr('value', crystal4);
}

function updateDom() {
  $('#compScore').text(compScore);
  $('#userScore').text(userScore);
  $('#wins').text(wins);
  $('#losses').text(losses);
}

initializeGame();
updateDom();

$('#crystal-1').on('click', function() {
  var num = parseInt($(this).attr('value'));
  userScore += num;
  checkLoss();
});

$('#crystal-2').on('click', function() {
  var num = parseInt($(this).attr('value'));
  userScore += num;
  checkLoss();
});

$('#crystal-3').on('click', function() {
  var num = parseInt($(this).attr('value'));
  userScore += num;
  checkLoss();
});

$('#crystal-4').on('click', function() {
  var num = parseInt($(this).attr('value'));
  userScore += num;
  checkLoss();
});

function checkLoss() {
  if (userScore < compScore) {
    updateDom();
  } else if (userScore === compScore) {
    wins++;
    initializeGame();
    updateDom();
  } else {
    losses++;
    initializeGame();
    updateDom();
  }
}

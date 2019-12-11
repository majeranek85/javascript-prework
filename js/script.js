{
let PlayerScore = 0;
let ComputerScore = 0;

const playGame = function(playerInput){

  clearMessages();

  const getMoveName = function(argMoveId){
    if (argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  const argComputerMove = getMoveName(randomNumber);


  console.log('Gracz wpisał: ' + playerInput);
  const argPlayerMove = getMoveName(playerInput);

  const displayResult = function() {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      PlayerScore++;
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Nie wybrałeś poprawnego ruchu! Wybierz: 1-papier, 2-kamień lub 3-nożyce.');
    } else {
      printMessage('Ty przegrywasz :(');
      ComputerScore++;
    }
  }

  displayResult();
  score();
}

const score = function(){
  document.getElementById('result').innerHTML = 'Gracz:' + PlayerScore + '-' + ComputerScore + 'Komputer'
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
}

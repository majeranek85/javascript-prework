function getMoveName(argMoveId){
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

// Computers move

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
/*
if (randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
  computerMove = 'nożyce';
} else {
  computerMove;
}
*/
//printMessage ('Mój ruch to: ' + argComputerMove)

//Players move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
/*
if (playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else if (playerInput == '3'){
  playerMove = 'nożyce';
} else {
  playerMove;
}
*/
//printMessage('Twój ruch to: ' + argPlayerMove);

// Result
function displayResult(argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if (argComputerMove == "kamień" && argPlayerMove == "papier" || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
  else if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  }
  else {
    printMessage('Ty przegrywasz :(');
  }
}

displayResult(argComputerMove, argPlayerMove);
/*
if (computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('Ty przegrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Ty przegrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Ty przegrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == playerMove) {
  printMessage('Remis!');
} else {
  printMessage('Nie wybrałeś poprawnego ruchu! Wybierz: 1-papier, 2-kamień lub 3-nożyce.');
}
*/

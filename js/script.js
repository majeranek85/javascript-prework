// Computers move

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
  computerMove = 'nożyce';
} else {
  computerMove;
}

printMessage ('Mój ruch to: ' + computerMove)

//Players move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else if (playerInput == '3'){
  playerMove = 'nożyce';
} else {
  playerMove;
}

printMessage('Twój ruch to: ' + playerMove);

// Result

if (computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('Ty przegrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
  printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'papier') {
  printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Ty przegrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Ty przegrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
  printMessage('Remis!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove) {
  printMessage('Nie wybrałeś poprawnego ruchu! Wybierz: 1-papier, 2-kamień lub 3-nożyce.');
} else if (computerMove == 'papier' && playerMove) {
  printMessage('Nie wybrałeś poprawnego ruchu! Wybierz: 1-papier, 2-kamień lub 3-nożyce.');
} else if (computerMove == 'nożyce' && playerMove) {
  printMessage('Nie wybrałeś poprawnego ruchu! Wybierz: 1-papier, 2-kamień lub 3-nożyce.');
}

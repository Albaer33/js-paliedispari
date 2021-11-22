// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userChoice;
let userNumber;
let pcNumber;
let sum;
let evenOrOdd;

do {
    userChoice = prompt('scegli pari o dispari: ');
} while(userChoice !== 'pari' && userChoice !== 'dispari');

do {
    userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
} while(userNumber <= 0 || userNumber > 5);
pcNumber = Math.floor(Math.random() * 5) + 1;
alert('il numero del pc è: ' + pcNumber);
sum = userNumber + pcNumber;
// chiamo la funzione che restituisce se è pari o dispari
evenOrOdd = evenOrOddFunction(sum);
// dichiaro il vincitore
if (evenOrOdd === userChoice) {
    alert('l \'utente ha vinto');
}
else {
    alert('il computer ha vinto');
}

// implementazione funzione
function evenOrOddFunction(number) {
    if (number % 2 === 0) {
        return 'pari';
    }
    else {
        return 'dispari';
    }
}
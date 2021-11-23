// Chiedere all’utente di inserire una parola
const userWord = prompt('inserisci una parola per verificare che sia palindroma:');
let isPalindrome = false;
isPalindrome = palindrome(userWord);
if (isPalindrome) {
    alert('Si, ' + userWord + ' è palindroma');
}
else {
    alert('No, ' + userWord + ' non è palindroma');
}
// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(word) {
    let reverseWord = '';
    for (let i = word.length-1; i >= 0; i--) {
        reverseWord += word[i];
    }
    if (word === reverseWord) {
        return true;
    }
    else {
        return false;
    }
}
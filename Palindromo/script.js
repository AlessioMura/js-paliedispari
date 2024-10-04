//Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Preparazione
let user_word;

// Raccolta Dati
user_word = prompt('Inserisci quì la parola');

// Elaborazione
function word_check(user_word) {
    if (user_word = user_word.split("").reverse().join("")) {
        document.write('Your word is a palindrome');
    } else {
        document.write('Your word is not a palindrome');
    }
    return user_word
}

// Richiama la funzione
word_check(user_word);
// 7.1 Number guesser
const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 100) + 1;
}
const array = [];
var count = 0;
var ranNum = rand10();
var nbr = readlineSync.question('Guess the number : ');
while (nbr != ranNum) {
    if (nbr < ranNum) {
        console.log('Too low ');
        nbr = readlineSync.question('Guess the number : ');
        array[count] = nbr;
        count++;
    }
    else {
        console.log('Too high ');
        nbr = readlineSync.question('Guess the number : ');
        array[count] = nbr;
        count++;
    }    
}
console.log(...array);
console.log(`Well guessed after ${count} tryin !`);


const readlineSync = require("readline-sync");

let nbr1 = readlineSync.question('Can you give me a number? ');
let nbr2 = readlineSync.question('Can you give me a second number? ');
console.log(nbr1 / nbr2);
console.log(nbr1 % nbr2);
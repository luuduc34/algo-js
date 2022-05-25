const readlineSync = require("readline-sync");

let nbr1 = Math.trunc(readlineSync.question('Can you give me a number? '));
let nbr2 = readlineSync.question('Can you give me a second number? ');
console.log(nbr1 * nbr2);

/* let nbr = readlineSync.question('Can you give me a number? ');
let nbr1 = Math.trunc(nbr);
let nbr2 = readlineSync.question('Can you give me a second number? ');
console.log(nbr1 * nbr2); */
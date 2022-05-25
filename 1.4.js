const readlineSync = require("readline-sync");

let Name = readlineSync.question('Can you give me your name please? ');
let firstName = readlineSync.question('Can you give me your firstname please? ');
let city = readlineSync.question('Can you give me your city please? ');
console.log("Your name is " + firstName + " " + Name + " and you live in " + city);
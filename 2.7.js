const readlineSync = require("readline-sync");

let n = readlineSync.question('How many times : ');
let sum = 0;
let num;
for (i = 0; i < n; i++) {
    num =new Number(readlineSync.question('Give me a number : '));
    sum += num;
}
console.log('The result is : ' + sum);
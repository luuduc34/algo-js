// 7.2 Fibonacci numbers
const readlineSync = require("readline-sync");
let nbr;
function fibonacci(n) {
let nbr1 = 0;
let nbr2 = 1;
let result = 0;
const fibo = [];
    for(let i = 0; i < nbr; i++) {
        result = nbr1 + nbr2;
        fibo.push (result); 
        nbr1 = nbr2;
        nbr2 = result;
    }
return fibo;
} 
console.log(...fibonacci(nbr = readlineSync.question('Max numbers in fibonacci suite : ')));
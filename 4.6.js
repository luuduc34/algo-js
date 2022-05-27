const readlineSync = require("readline-sync");
let result = 1;
function factorial(a){
    for(let i = 1; i <= a ; i++)
    result *= i;
    return result;
}
let x = readlineSync.question('Enter a number : ');
console.log('Factorial of ' + x + ' is ' + factorial(x));
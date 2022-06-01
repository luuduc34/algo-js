// 7.3 Divisor
const readlineSync = require("readline-sync");
let num;

function divisor(num){
const array = [];
const array2 = [];
if (num % 2 != 0 && num % 3 != 0) {
    console.log('Nothing, it\'s a prime number');
}
else {
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {     
            if (i == 1 || i == num) {
                array2.push(i); 
            }
            else {
                array.push(i);
            }
        }
    }
}
return array;
}
console.log(...divisor(num = readlineSync.question('Give me a number : ')));

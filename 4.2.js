const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}
let n = readlineSync.question('How many random numbers do you want ? : ');
for(let i = 1; i <= n; i++) {
    console.log('Random number ' + i + ' is : ' + rand10());
}
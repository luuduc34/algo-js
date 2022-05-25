const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}
let n = readlineSync.question('How many random numbers do you want ? : ');
for(let i = 1; i <= n; i++) {
    console.log('Random number ' + i + ' is : ' + rand10());
}

/* Documentation of random function
------------------------------------
// Returns a random number (always returns a number lower than 1):
Math.random();

Math.random() used with Math.floor() can be used to return random integers.
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1; */
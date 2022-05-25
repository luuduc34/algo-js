const readlineSync = require("readline-sync");

var mArray = [];
function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}
function multiRand(n) {
    for(let i = 0; i < n; i++) {
        mArray[i] = rand10();
    }
}
let val = readlineSync.question('How many random numbers do you want in the array ? : ');
multiRand(val);
console.log(mArray);

/* Documentation of random function
------------------------------------
- Declare an empty array variable mArray
- Declare a variable val (get by user) for range of elements
- Use multiRand function to get a random (getting with rand10() function) value for each element of your array :

function multiRand(n) {
    for(let i = 0; i < n; i++) {
        mArray[i] = rand10();
    }
} 

*/
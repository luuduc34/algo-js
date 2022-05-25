const readlineSync = require("readline-sync");

function calcSurface(a, b) {
    return a * b;
}
let length = readlineSync.question('Length of the rectangle : ');
let width = readlineSync.question('Width of the rectangle : ');
console.log('The surface of the rectangle is : ' + calcSurface(length, width));
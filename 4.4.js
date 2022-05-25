const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}
function multiRand(n) {
    for(let i = 0; i < n; i++) {
        array[i] = rand10();
    }
}
function average(n) {
    for(let i = 0; i < n.length; i++) {
        av = (sum += n[i])/n.length;
    }
    return av;
}
var array = [];
var sum = 0;
var av;
let val = readlineSync.question('Number of values in your array : ');
multiRand(val);
console.log(array);

let ask = readlineSync.question('Type :\n 1 for average\n 2 for min \n 3 for max\n');

switch (ask) {
    case '1':
        console.log('The average value of your array is : ' + average(array));
        break;
    case '2':
        console.log('The min value of your array is : ' + Math.min.apply(Math, array));
    case '3':
        console.log('The max value of your array is : ' + Math.max.apply(Math, array));
        break;    
  default:
    console.log('Sorry, your number is not between 1 and 3 !');
}

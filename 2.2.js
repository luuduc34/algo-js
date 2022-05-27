const readlineSync = require("readline-sync");

let minage = readlineSync.question('Minimum age : ');
let maxage = readlineSync.question('Maximum age : ');
let current = readlineSync.question('Your current age : ');
if(minage > maxage) {
    console.log('Minimum age must be minder than maximum age !!!');
}
    else if(current > minage && current < maxage) {
        console.log('Current age : ' + current);
}
    else {
        console.log('Current age must be in range of min and max !!!');
    }
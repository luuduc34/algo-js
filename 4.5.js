const readlineSync = require("readline-sync");
var a = [];
var b = [];
for(let i = 0; i < 2; i++){
    a[i] = readlineSync.question('Enter value ' + (i+1) + ' for point A : ');
}
for(let i = 0; i < 2; i++){    
    b[i] = readlineSync.question('Enter value ' + (i+1) + ' for point B : ');
}
console.log('Coordinates x : ' + a + ' coordinates y : ' + b);
function calcDistance(a,b) {
    return Math.hypot(b[0]-a[0], b[1]-a[1])
    }
console.log('Distance between A and B is : ' + calcDistance(a, b));
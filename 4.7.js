const readlineSync = require("readline-sync");

const elevator = [];
elevator[0] = readlineSync.question('Left elevator floor : ');
elevator[1] = readlineSync.question('Right elevator floor : ');
let current = readlineSync.question('Current floor : ');

var closest = elevator.reduce(function(prev, curr) {
  return (Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev);
});
if (elevator[0] == elevator[1]){
    console.log('The closest is the right elevator in ' + elevator[1] + ' floor');
}
else {
switch (closest) {
    case elevator[0]:
        console.log('The closest is the left elevator in ' + elevator[0] + ' floor');
        break;
    case elevator[1]:
        console.log('The closest is the right elevator in ' + elevator[1] + ' floor');
        break;
}
}
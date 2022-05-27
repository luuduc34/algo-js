const readlineSync = require("readline-sync");

let num = readlineSync.question('Give me your favorite number : ');
while (num != 42) {
    num = new Number (readlineSync.question('Are you sure ? give another favorite number : '));
}

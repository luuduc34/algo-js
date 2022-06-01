// 7.3 Pizza Flavors Manager
const readlineSync = require("readline-sync");
var flavors = [];
var choice;
var temp;
function menu() {
    console.log('\n Please choose your actions : \n\n 1 - List all the pizza flavors \n 2 - Add a new pizza flavor \n 3 - Remove a pizza flavor \n 4 - Exit this program \n');
    choice = readlineSync.question('\nEnter your action s number : ');
    switch (choice) {
        case '1':
            list();
            break;
        case '2':
            add();
            break;
        case '3':
            remove();
            break;
        case '4':
            console.log('\nThank you, goodbye !');
            break;
    }
}
function list() {
    console.clear();
    if (flavors.length == 0) {
        console.log('\nThere is no flavors yet ! ');
    }
    for (let i = 1; i <= flavors.length; i++) {
        console.log(i + ' - ' + flavors[i-1]);
    }
    menu();
}
function add() {
    console.clear();
    flavors.push(temp = readlineSync.question('Flavor you want to add : '));
    console.log(temp + ' is added');
    menu();
}
function remove() {
    console.clear();
    temp = readlineSync.question('Flavor you want to remove : ');
    flavors.splice(flavors[temp-1], 1);
    console.log(temp + ' is removed');
    menu();
}

console.clear();
console.log('Hello! Welcome to the Pizza Flavors Manager.\n');
menu();

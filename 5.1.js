const readlineSync = require("readline-sync");

function askTvSerie(){
let name = readlineSync.question('Serie\'s name : ');
let date = readlineSync.question('Production\'s year : ');
let cptr = readlineSync.question('How many members in cast : ');
let cast = [];
for (let i = 0; i < cptr; i++){
    cast[i] = readlineSync.question('Member ' + (i+1) + ' is : ');
}
let tvSeries = {name, date, cast, 
    identite : function(){
        return 'Name : ' + this.name +
        '\nDate : ' + this.date +
        '\ncast : ' + this.cast;
    }
};
console.clear();
console.log(tvSeries.identite());
}
askTvSerie();

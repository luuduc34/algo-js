const readlineSync = require("readline-sync");
var caisse1 = 0;
var caisse2 = 0;
var cptr = readlineSync.question('Nombre de client : ');
var nbrclient = [];
var sum = 0;

for(let i = 0; i < cptr; i++){
    nbrclient[i] = readlineSync.question('Temps client ' + (i+1) + ' : ');
    sum += parseInt (nbrclient[i]);
}

var nbrcaisse = readlineSync.question('Nombre de caisse : ');

if(nbrcaisse == 1){
    console.log('Le temps total pour 1 caisse est : ' + sum + ' minutes');
}
else{
    console.log(nbrclient);
    caisse1 = parseInt(nbrclient[0]);
    caisse2 = parseInt(nbrclient[1]);
    for( i=2; i < cptr; i++){
    if(caisse1 < caisse2){
        caisse1 += parseInt(nbrclient[i]);
    }
    else{
        caisse2 += parseInt(nbrclient[i]);
    }
    }
    console.log('Temps de la file la plus longue : ' + Math.max(caisse1, caisse2) + ' minutes');
}

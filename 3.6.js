const Array = ['hello', 'world', 'this', 'is', 'great'];

let sentence ='';
function smash (n) {
for(var i = 0; i < n.length; i++) {
    sentence += n[i] + ' ';
}
}
smash (Array);
console.log(sentence);

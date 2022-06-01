const Array = [-1, 2, -3, 5, 4, -5, -10];

function sumpositive (n) {
var sum = 0;
for(var i = 0; i < n.length; i++) {
    if(n[i] > 0) {
        sum += n[i];;
    }
}
return sum;
}
console.log('Sum of positives is : ' + sumpositive(Array));

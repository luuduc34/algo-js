const Array = [1, 2, 3, -5, 4, 5, -10];

function sumpositive (n) {
var negatives = [];
var sum = 0;

for(var i = 0; i < n.length; i++) {
    if(n[i] < 0) {
        negatives.push(n[i]);
    }
    else {
        sum += n[i];
    }
}
console.log('Negatives are : ' + negatives);
return sum;
}
console.log('Sum of positives is : ' + sumpositive(Array));

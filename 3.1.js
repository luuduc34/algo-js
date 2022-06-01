const Array = [1, 2, 3, 4, 5];
const Array2 = [100, 101, 105];
let sum = 0;
for (i = 0; i < Array.length; i++) {
    sum += Array[i];
}
console.log('Sum of ' + Array + ' is : ' + sum);

sum = 0;
for (i = 0; i < Array2.length; i++) {
    sum += Array2[i];
}
console.log('Sum of ' + Array2 + ' is : ' + sum);

// Solution Marlene
// let sum = Array.reduce((previousvalue,currentvalue)=> previousvalue + currentvalue, 0); pour commencer à 0
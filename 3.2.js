const Array = [1, 2, 3, 4, 5];
const Array2 = [100, 101, 102];
let sum = 0;
for (i = 0; i < Array.length; i++) {
    sum += Array[i];
}
console.log('Average of ' + Array + ' is : ' + sum/Array.length);

sum = 0;
for (i = 0; i < Array2.length; i++) {
    sum += Array2[i];
}
console.log('average of ' + Array2 + ' is : ' + sum/Array2.length);
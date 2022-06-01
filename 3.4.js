const Array = [1, 2, 3, 4, 5];
const Array2 = [100, 101, 105];
let min = Math.min.apply(Math, Array);
let max = Math.max.apply(Math, Array);
console.log('Min of ' + Array + ' is : ' + min + ' and max is : ' + max);
// let min = Math.min(...Array);
// let max = Math.max(...Array);
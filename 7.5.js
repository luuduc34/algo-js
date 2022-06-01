// sort function
function sort(n) {
    var currentIndex = n.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = n[currentIndex];
      n[currentIndex] = n[randomIndex];
      n[randomIndex] = temporaryValue;
    }
    return n;
}
console.log(...array = [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(...sort(array));

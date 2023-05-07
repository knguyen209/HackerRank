let arr = [1, 1, 0, -1, -1, -1];

var positives = arr.filter((n) => n > 0);
var negatives = arr.filter((n) => n < 0);
var zeros = arr.filter((n) => n === 0);

console.log((positives.length / arr.length).toFixed(6));
console.log((negatives.length / arr.length).toFixed(6));
console.log((zeros.length / arr.length).toFixed(6));

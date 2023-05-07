function convertToIntegers(strings) {
    if (strings !== null) {
        return strings.map((n) => parseInt(n));
    } else return null;
}

console.log(convertToIntegers(["1", "2", "3"]));
console.log(convertToIntegers([]));
console.log(convertToIntegers(null));

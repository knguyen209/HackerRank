/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 * @param a an array of integers
 * @returns the unique integer
 */
function lonelyinteger(a) {
    const sortedArr = a.sort((a, b) => a - b)
    console.log(sortedArr)
    for (var i = 1; i < sortedArr.length; i = i + 2) {
        console.log(sortedArr[i], sortedArr[i - 1])
        if (sortedArr[i] - sortedArr[i - 1] != 0) {
            return sortedArr[i - 1]
        }
    }
    return sortedArr[sortedArr.length - 1]
}

// const lonelyInteger = lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
const lonelyInteger = lonelyinteger([
    34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31,
])
console.log(lonelyInteger)

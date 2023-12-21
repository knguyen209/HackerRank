/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 */

function diagonalDifference(arr) {
    var primarySum = 0,
        secondarySum = 0
    for (var i = 0; i < arr.length; i++) {
        primarySum += arr[i][i]
        secondarySum += arr[i][arr.length - i - 1]
    }
    console.log(secondarySum)

    return Math.abs(primarySum - secondarySum)
}

console.log(
    diagonalDifference([
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9],
    ])
)

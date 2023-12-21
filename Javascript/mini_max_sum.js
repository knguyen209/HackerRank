/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */
function miniMaxSum(arr) {
    // Write your code here
    var totalSum = 0
    for (var i = 0; i < arr.length; i++) {
        totalSum += arr[i]
    }
    var minSum = totalSum - arr[0],
        maxSum = totalSum - arr[0]
    for (var i = 1; i < arr.length; i++) {
        var sum = totalSum - arr[i]
        minSum = sum < minSum ? sum : minSum
        maxSum = sum > maxSum ? sum : maxSum
    }
    console.log(minSum + ' ' + maxSum)
}

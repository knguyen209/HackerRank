/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 * Print the decimal value of each fraction on a new line with  places after the decimal.
 * arr = [1, 1, 0, -1, -1]
 * Output:
 * 0.400000
 * 0.400000
 * 0.200000
 */
function plusMinus(arr) {
    // Write your code here
    const posArr = arr.filter((i) => i > 0)
    const negArr = arr.filter((i) => i < 0)
    const noZeros = arr.length - posArr.length - negArr.length
    console.log(posArr.length / arr.length)
    console.log(negArr.length / arr.length)
    console.log(noZeros / arr.length)
}

/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem
 *
 * @param arr
 * @returns
 */
function countingSort(arr) {
    // Write your code here
    var result = []
    for (var i = 0; i < 100; i++) {
        const filteredArr = arr.filter((n) => n === i)
        result.push(filteredArr.length)
    }
    return result
}

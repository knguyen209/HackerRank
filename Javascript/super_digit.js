/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-recursive-digit-sum/problem
 * @param n string representation of an integer
 * @param k the times to concatenate n to make p
 */
function superDigit(n, k) {
    let result = (parseInt(findSuperDigit(n)) * k).toString()
    return result.length > 1 ? findSuperDigit(result) : result
}

function findSuperDigit(n) {
    if (n.length === 1) {
        return n
    } else {
        let sum = 0
        for (let i = 0; i < n.length; i++) {
            sum += parseInt(n[i])
        }
        return findSuperDigit(sum.toString())
    }
}

console.log(superDigit('9875', 4))

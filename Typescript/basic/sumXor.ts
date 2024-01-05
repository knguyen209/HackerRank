// https://www.hackerrank.com/challenges/one-month-preparation-kit-sum-vs-xor/problem
function sumXor(n: number): number {
    // Write your code here
    let zeros = 0
    while (n > 0) {
        if (n % 2 == 0) {
            zeros++
        }
        n = Math.floor(n / 2)
    }
    return Math.pow(2, zeros)
}

console.log(sumXor(5))

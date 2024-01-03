// https://www.hackerrank.com/challenges/one-month-preparation-kit-two-arrays/problem

function twoArrays(k: number, A: number[], B: number[]): string {
    // let sumA = A.reduce((sumA, i) => sumA +=i, 0)
    // let sumB = B.reduce((sumB, i) => sumB +=i, 0)
    // let sum = sumA + sumB
    // return sum / A.length >= k ? 'YES' : 'NO'

    A.sort((a, b) => a - b)
    B.sort((a, b) => a - b)

    let count = 0
    let n = A.length
    while (A.length > 0 && B.length > 0) {
        let a = A.shift()! // get first element of A
        let b = B.pop()! // get last element of B
        console.log(a, b)
        if (a + b >= k) {
            count++
        }
    }

    return count == n ? 'YES' : 'NO'
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]))
// console.log(twoArrays(10, [1000,1,1,1],[1,1,1,1]))
// console.log(twoArrays(4, [20, 1],[1,1]))

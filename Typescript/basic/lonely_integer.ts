// https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem
function lonelyInteger(a: number[]): number {
    // Write your code here
    a.sort((a, b) => a - b)
    for (let i = 1; i < a.length - 1; i += 2) {
        if (a[i] - a[i - 1] != 0) {
            return a[i - 1]
        }
    }
    return a[a.length - 1]
}

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]))

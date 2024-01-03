// https://www.hackerrank.com/challenges/one-month-preparation-kit-flipping-bits/problem

function flippingBits(n: number): number {
    let max = parseInt(''.padStart(32, '1'), 2)
    return max - n
}

// https://www.hackerrank.com/challenges/one-month-preparation-kit-equal-stacks/problem
function equalStacks(h1: number[], h2: number[], h3: number[]): number {
    let sumH1 = h1.reduce((sum, i) => (sum += i), 0)
    let sumH2 = h2.reduce((sum, i) => (sum += i), 0)
    let sumH3 = h3.reduce((sum, i) => (sum += i), 0)

    let minHeight = Math.min(sumH1, sumH2, sumH3)

    while (
        (sumH1 != sumH2 || sumH1 != sumH3 || sumH2 != sumH3) &&
        h1.length > 0 &&
        h2.length > 0 &&
        h3.length > 0
    ) {
        if (sumH1 > minHeight) {
            sumH1 -= h1.shift()!
        }
        if (sumH2 > minHeight) {
            sumH2 -= h2.shift()!
        }
        if (sumH3 > minHeight) {
            sumH3 -= h3.shift()!
        }
        minHeight = Math.min(sumH1, sumH2, sumH3)
    }

    return minHeight
}

console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]))

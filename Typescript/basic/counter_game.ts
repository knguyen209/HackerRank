// https://www.hackerrank.com/challenges/one-month-preparation-kit-counter-game/problem

function counterGame(n: number): string {
    if (n == 1) {
        return 'Richard'
    }

    let louiseTurn = false

    while (n > 1) {
        louiseTurn = !louiseTurn
        if (isPowerOf2(n)) {
            n = n / 2
        } else {
            n = n - nextLowerPowerOf2(n)
        }
        console.log(n, louiseTurn)
    }

    return louiseTurn ? 'Louise' : 'Richard'
}

function isPowerOf2(n: number): boolean {
    return Math.log2(n) === Math.floor(Math.log2(n))
}

function nextLowerPowerOf2(n: number): number {
    return Math.pow(2, Math.floor(Math.log2(n)))
}

// console.log(counterGame(1560834904))
// console.log(counterGame(1768820483))
// console.log(counterGame(1533726144))
// console.log(counterGame(1620434450))
// console.log(counterGame(1463674015))
console.log(counterGame(6))
console.log(counterGame(1533726144))

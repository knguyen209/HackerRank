// https://www.hackerrank.com/challenges/one-month-preparation-kit-waiter/problem
function waiter(number: number[], q: number): number[] {
    let A: number[] = number
    let B: number[] = []
    let primeNumber = 2

    for (let i = 0; i < q; i++) {
        let temp: number[] = []
        for (let j = 0; j < A.length; j++) {
            if (A[j] % primeNumber == 0) {
                B.push(A[j])
            } else {
                temp.unshift(A[j])
            }
        }
        A = temp
        primeNumber = nextPrime(primeNumber)
    }

    return B.concat(A.reverse())
}

console.log(waiter([3, 4, 7, 6, 5], 1))

function nextPrime(n: number): number {
    let next = n + 1

    while (!isPrime(next)) {
        next++
    }

    return next
}

function isPrime(n: number): boolean {
    if (n <= 1) {
        return false
    }

    if (n == 2 || n == 3) {
        return true
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }

    return true
}

console.log(nextPrime(3))

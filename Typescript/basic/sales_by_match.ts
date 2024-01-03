// https://www.hackerrank.com/challenges/one-month-preparation-kit-sock-merchant/problem

function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    let map = new Map<number, number>()

    for (let i = 0; i < n; i++) {
        let count = map.get(ar[i]) || 0
        map.set(ar[i], count + 1)
    }

    let answer = 0
    map.forEach((val, key) => {
        answer += Math.floor(val / 2)
    })

    return answer
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]))

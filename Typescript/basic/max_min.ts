// https://www.hackerrank.com/challenges/one-month-preparation-kit-angry-children/problem

function maxMin(k: number, arr: number[]): number {
    arr.sort((a, b) => a - b)
    let answer = Number.MAX_VALUE
    for (let i = 0; i <= arr.length - k; i++) {
        let min = arr[i]
        let max = arr[i + k - 1]
        let unfairness = max - min
        answer = Math.min(answer, unfairness)
    }
    return answer
}

// console.log(maxMin(2, [1,4,7,2]))
console.log(maxMin(3, [100, 200, 300, 350, 400, 401, 402]))

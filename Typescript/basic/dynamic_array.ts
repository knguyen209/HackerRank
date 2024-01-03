//  https://www.hackerrank.com/challenges/one-month-preparation-kit-dynamic-array/problem

function dynamicArray(n: number, queries: number[][]): number[] {
    // Write your code here
    let arr: number[][] = []
    for (let i = 0; i < n; i++) {
        arr.push([])
    }
    let lastAnswer = 0
    let answer: number[] = []
    for (let i = 0; i < queries.length; i++) {
        let type = queries[i][0]
        let x = queries[i][1]
        let y = queries[i][2]
        let idx = (x ^ lastAnswer) % n
        if (type === 1) {
            arr[idx].push(y)
        }
        if (type === 2) {
            lastAnswer = arr[idx][y % arr[idx].length]
            answer.push(lastAnswer)
        }
        if (i === 0) {
            console.log(idx)
            console.log(arr)
        }
    }

    return answer
}

console.log(
    dynamicArray(2, [
        [1, 0, 5],
        [1, 1, 7],
        [1, 0, 3],
        [2, 1, 0],
        [2, 1, 1],
    ])
)

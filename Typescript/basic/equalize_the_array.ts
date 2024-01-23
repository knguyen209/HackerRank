// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr: number[]): number {
    let answer = arr.length

    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] != arr[j]) {
                count++
            }
        }
        answer = Math.min(answer, count)
    }
    return answer
}

console.log(equalizeArray([3, 3, 2, 1, 3]))

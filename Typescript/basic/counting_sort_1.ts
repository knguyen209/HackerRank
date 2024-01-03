// https://www.hackerrank.com/challenges/one-month-preparation-kit-countingsort1/problem
function countingSort(arr: number[]): number[] {
    // Write your code here
    let n = arr.length
    let answer = new Array(100).fill(0)
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        answer[num] += 1
    }
    return answer
}

console.log(countingSort([1, 1, 3, 2, 1]))

// https://www.hackerrank.com/challenges/one-month-preparation-kit-maxsubarray/problem
// Using Kadane's Algorithm
function maxSubarray(arr: number[]): number[] {
    let currSubArrSum = arr[0]
    let maxSubArrSum = arr[0]
    let maxSubSeqSum = arr[0] //Math.max(arr[0], -1)

    for (let i = 1; i < arr.length; i++) {
        if (currSubArrSum < 0) {
            currSubArrSum = 0
        }

        currSubArrSum += arr[i]

        maxSubArrSum = Math.max(currSubArrSum, maxSubArrSum)

        if (arr[i] >= 0) {
            maxSubSeqSum += arr[i]
        }

        if (arr[i] > maxSubSeqSum) {
            maxSubSeqSum = arr[i]
        }
    }

    let answer: number[] = []
    answer.push(maxSubArrSum, maxSubSeqSum)
    return answer
}

console.log(maxSubarray([-10]))
console.log(maxSubarray([1, 2, 3, 4]))
console.log(maxSubarray([2, -1, 2, 3, 4, -5]))
console.log(maxSubarray([-2, -3, -1, -4, -6]))

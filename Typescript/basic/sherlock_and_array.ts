// https://www.hackerrank.com/challenges/one-month-preparation-kit-sherlock-and-array/problem

function balancedSums(arr: number[]): string {
    let leftSum = 0
    let rightSum = arr.reduce((sum, i) => (sum += i), 0)
    for (let i = 0; i < arr.length; i++) {
        rightSum -= arr[i]
        if (rightSum == leftSum) {
            return 'YES'
        }
        leftSum += arr[i]
    }
    return 'NO'
}

console.log(balancedSums([5, 6, 8, 11]))

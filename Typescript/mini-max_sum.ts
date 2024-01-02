function miniMaxSum(arr: number[]): void {
    let n = arr.length
    arr.sort((a, b) => a - b)
    let sum = arr.reduce((sum, i) => (sum += i), 0)
    console.log(sum - arr[n - 1] + ' ' + (sum - arr[0]))
}
miniMaxSum([1, 2, 3, 4, 5])

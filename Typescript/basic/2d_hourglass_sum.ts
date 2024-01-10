// https://www.hackerrank.com/challenges/2d-array/problem
function hourglassSum(arr: number[][]): number {
    let maxSum = -63 // hourglass sum of 7 elements, constraint min of each element is -9

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            let mid = arr[i][j]
            let top = arr[i - 1][j]
            let btm = arr[i + 1][j]
            let topLeft = arr[i - 1][j - 1]
            let topRight = arr[i - 1][j + 1]
            let btmLeft = arr[i + 1][j - 1]
            let btmRight = arr[i + 1][j + 1]
            let sum = mid + top + topLeft + topRight + btm + btmLeft + btmRight
            if (i == 1 && j == 1) {
                console.log(mid, top, topLeft, topRight, btmLeft, btmRight)
            }
            maxSum = Math.max(sum, maxSum)
        }
    }
    return maxSum
}

// console.log(hourglassSum([
//     [1,1,1,0,0,0],
//     [0,1,0,0,0,0],
//     [1,1,1,0,0,0],
//     [0,0,2,4,4,0],
//     [0,0,0,2,0,0],
//     [0,0,1,2,4,0]
// ]))
console.log(
    hourglassSum([
        [-1, 1, -1, 0, 0, 0],
        [0, -1, 0, 0, 0, 0],
        [-1, -1, -1, 0, 0, 0],
        [0, -9, 2, -4, -4, 0],
        [-7, 0, 0, -2, 0, 0],
        [0, 0, -1, -2, -4, 0],
    ])
)

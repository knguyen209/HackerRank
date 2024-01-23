// https://www.hackerrank.com/challenges/array-left-rotation/problem
function rotateLeft(d: number, arr: number[]): number[] {
    if (d == 0 || d == arr.length) {
        return arr
    }

    let leftArr = arr.slice(0, d)
    let rightArr = arr.slice(d, arr.length)

    return rightArr.concat(leftArr)
}

console.log(rotateLeft(2, [1, 2, 3, 4, 5]))

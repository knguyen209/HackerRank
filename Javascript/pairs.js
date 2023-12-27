// https://www.hackerrank.com/challenges/pairs/problem
function pairs(k, arr) {
    let total = 0
    let sortedArr = arr.sort((a, b) => a - b)
    for (let i = 0; i < sortedArr.length; i++) {
        binarySearch(sortedArr[i] + k, sortedArr, 0, sortedArr.length - 1) !=
            -1 && total++
    }

    return total
}

function binarySearch(key, arr, startIndex, endIndex) {
    if (startIndex <= endIndex) {
        let mid = startIndex + parseInt((endIndex - startIndex) / 2)
        if (key < arr[mid]) {
            return binarySearch(key, arr, startIndex, mid - 1)
        }
        if (key > arr[mid]) {
            return binarySearch(key, arr, mid + 1, endIndex)
        }
        if (key == arr[mid]) {
            return mid
        }
    }
    return -1
}

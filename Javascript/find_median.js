function findMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b)
    const mid = Math.floor(sortedArr.length / 2)

    if (sortedArr.length % 2 === 0) {
        return (sortedArr[mid - 1] + sortedArr[mid]) / 2
    }

    return sortedArr[mid]
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]))

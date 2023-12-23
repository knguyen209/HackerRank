// https://www.hackerrank.com/challenges/pairs/problem
function pairs(k, arr) {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        let targetVal = arr[i] + k
        if (arr.includes(targetVal)) {
            total++
        }
    }

    return total
}

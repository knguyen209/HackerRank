function zigzagSequence(input) {
    const n = input.length
    const k = (n + 1) / 2 - 1
    console.log(k)
    const arr = input.sort((a, b) => a - b)

    console.log(arr)
    let j = 0
    for (let i = 0; i < (n - k) / 2; i++) {
        let temp = arr[k + i]
        arr[k + i] = arr[n - i - 1]
        arr[n - i - 1] = temp
        // j++
        console.log(arr)
    }

    return arr
}

console.log(zigzagSequence([1, 2, 3, 4, 5, 6, 7]))
/**
 * 0 1 2 3 4
 * 1 2 3 4 5
 * 1 4 3 2 5
 * 1 4 5 2 3
 *
 *
 *
 * 1 2 5 4 3
 * 1 4 5 2 3
 *
 * 1 2 3 4 5 6 7
 * 1
 *
 *
 * 1 2 3 7 5 6 4
 * 1 4 3 7 5 6 2
 * 1 4 6 7 5 3 2
 *
 * 1 2 3 4 5 6 7
 * 1 2 3 7 5 6 4
 * 1 2 3 7 6 5 4
 */

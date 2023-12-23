/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-new-year-chaos/problem
 *
 */

function minimumBribes(q) {
    let swapped = false
    let n = q.length
    let bribes = Array.from({ length: n }, (_, i) => 0)
    for (let i = 0; i < n - 1; i++) {
        swapped = false
        for (j = 0; j < n - i - 1; j++) {
            if (q[j] > q[j + 1]) {
                bribes[q[j] - 1] += 1
                let temp = q[j + 1]
                q[j + 1] = q[j]
                q[j] = temp
                swapped = true
            }
        }

        if (!swapped) {
            break
        }
    }
    let total = 0
    for (let i = 0; i < n; i++) {
        if (bribes[i] > 2) {
            console.log('Too chaotic')
            return
        }
        total += bribes[i]
    }
    console.log(total)
    console.log(q)
}

minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])

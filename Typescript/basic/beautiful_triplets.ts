// https://www.hackerrank.com/challenges/beautiful-triplets/problem?isFullScreen=true
function beautifulTriplets(d: number, arr: number[]): number {
    let count = 0

    let set = new Set<number>()

    for (const num of arr) {
        set.add(num)
    }

    for (const num of arr) {
        if (set.has(num + d) && set.has(num + 2 * d)) {
            count++
        }
    }

    return count
}

console.log(beautifulTriplets(1, [2, 2, 3, 4, 5]))

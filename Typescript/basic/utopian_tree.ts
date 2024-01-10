// https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true
function utopianTree(n: number): number {
    if (n == 0) {
        return 1
    }

    let height = 1
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            height++
        } else {
            height *= 2
        }
    }
    return height
}

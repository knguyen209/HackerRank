// https://www.hackerrank.com/challenges/strange-advertising/problem
function viralAdvertising(n: number): number {
    let cumulative = 0
    let shared = 5

    for (let i = 1; i <= n; i++) {
        let likes = Math.floor(shared / 2)
        cumulative += likes
        shared = Math.floor(shared / 2) * 3
    }

    return cumulative
}

viralAdvertising(5)

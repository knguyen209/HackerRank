// https://www.hackerrank.com/challenges/one-month-preparation-kit-climbing-the-leaderboard/problem

function climbingLeaderboard(ranked: number[], player: number[]): number[] {
    let ranks = [...new Set(ranked)]
    let result: number[] = []

    for (let i = 0; i < player.length; i++) {
        let score = player[i]
        let rank = ranks.length
        let j = rank - 1
        while (score >= ranks[j]) {
            rank--
            j--
        }
        result.push(rank + 1)
    }
    return result
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]))

// https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k: number, height: number[]): number {
    let max = height[0]

    for (let i = 1; i < height.length; i++) {
        max = Math.max(max, height[i])
    }

    return max > k ? max - k : 0
}

// https://www.hackerrank.com/challenges/queens-attack-2/problem
// Failed 3 test cases due to timeout

function queensAttack(
    n: number,
    k: number,
    r_q: number,
    c_q: number,
    obstacles: number[][]
): number {
    // spread direction
    const dirs: number[][] = [
        [0, 1], // right
        [0, -1], // left
        [1, 0], // top
        [-1, 0], // bottom
        [-1, -1], // bottom left
        [-1, 1], // bottom right
        [1, -1], // top left
        [1, 1], // top right
    ]
    // determine if the queen can spread in the direction
    const spreadable = Array(8).fill(true)

    let count = 0

    // max number of moves the queen can make
    let max = Math.max(n - r_q, r_q - 1, n - c_q, c_q - 1)

    for (let i = 0; i < dirs.length; i++) {
        let counter = 1
        let row = r_q,
            col = c_q
        while (spreadable[i] && counter <= max) {
            row += dirs[i][0]
            col += dirs[i][1]
            if (col >= 1 && col <= n && row >= 1 && row <= n) {
                console.log(row, col)
                if (includeObstacle(obstacles, [row, col])) {
                    spreadable[i] = false
                    continue
                }
                count++
            }
            counter++
        }
    }

    return count
}

function includeObstacle(obstacles: number[][], obstacle: number[]): boolean {
    for (let i = 0; i < obstacles.length; i++) {
        if (obstacles[i][0] == obstacle[0] && obstacles[i][1] == obstacle[1]) {
            return true
        }
    }
    return false
}

// console.log(queensAttack(8, 0, 4, 4, []))
// console.log(queensAttack(4, 0, 4, 4, []))
console.log(
    queensAttack(5, 3, 4, 3, [
        [5, 5],
        [4, 2],
        [2, 3],
    ])
)

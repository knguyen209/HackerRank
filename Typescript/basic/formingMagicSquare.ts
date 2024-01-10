function formingMagicSquare(s: number[][]): number {
    let possibleMagicSquares: number[][][] = [
        [
            [4, 3, 8],
            [9, 5, 1],
            [2, 7, 6],
        ],
        [
            [2, 9, 4],
            [7, 5, 3],
            [6, 1, 8],
        ],
        [
            [6, 7, 2],
            [1, 5, 9],
            [8, 3, 4],
        ],
        [
            [8, 1, 6],
            [3, 5, 7],
            [4, 9, 2],
        ],
        [
            [8, 3, 4],
            [1, 5, 9],
            [6, 7, 2],
        ],
        [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 6],
        ],
        [
            [2, 7, 6],
            [9, 5, 1],
            [4, 3, 8],
        ],
        [
            [6, 1, 8],
            [7, 5, 3],
            [2, 9, 4],
        ],
    ]

    let minCost = 81

    for (let k = 0; k < possibleMagicSquares.length; k++) {
        let cost = 0
        let possibleSquare = possibleMagicSquares[k]
        for (let i = 0; i < possibleSquare.length; i++) {
            for (let j = 0; j < possibleSquare[i].length; j++) {
                if (possibleSquare[i][j] != s[i][j]) {
                    cost += Math.abs(possibleSquare[i][j] - s[i][j])
                }
            }
        }
        minCost = Math.min(minCost, cost)
    }

    return minCost
}

console.log(
    formingMagicSquare([
        [5, 3, 4],
        [1, 5, 8],
        [6, 4, 2],
    ])
)

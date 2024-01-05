// https://www.hackerrank.com/challenges/one-month-preparation-kit-bomber-man/problem

function bomberMan(n: number, grid: string[]): string[] {
    let width = grid[0].length
    let height = grid.length

    // n is 1 -> return original grid
    if (n == 1) {
        return grid
    }

    // n is even -> return grid filled with O
    if (n % 2 == 0) {
        let result: string[] = []
        for (let i = 0; i < height; i++) {
            result.push('O'.repeat(width))
        }
        return result
    }

    // n = 3, 7, 11, 15, 19, 23 -> detonate once
    if (n % 4 == 3) {
        return detonate(grid)
    }

    // n = 5, 9, 13, 17, 21, 25 -> detonate twice
    if (n % 4 == 1) {
        let result = detonate(grid)
        result = detonate(result)
        return result
    }

    return grid
}

function detonate(grid: string[]): string[] {
    let width = grid[0].length
    let height = grid.length
    let finalGrid: string[][] = []

    for (let i = 0; i < height; i++) {
        finalGrid.push(Array(width).fill('O'))
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i].charAt(j) == 'O') {
                finalGrid[i][j] = '.'
                if (i - 1 >= 0) {
                    finalGrid[i - 1][j] = '.'
                }

                if (i + 1 < height) {
                    finalGrid[i + 1][j] = '.'
                }

                if (j - 1 >= 0) {
                    finalGrid[i][j - 1] = '.'
                }

                if (j + 1 < width) {
                    finalGrid[i][j + 1] = '.'
                }
            }
        }
    }

    return finalGrid.map((i) => i.join(''))
}

function printGrid(grid: string[]) {
    for (let i = 0; i < grid.length; i++) {
        console.log(grid[i])
    }
}

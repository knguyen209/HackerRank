function countingValleys(steps: number, path: string): number {
    let count = 0
    let elevation = 0
    for (let i = 0; i < steps; i++) {
        if (path[i] == 'D') {
            elevation += -1
        }
        if (path[i] == 'U') {
            elevation += 1
        }
        // if the hiker is going up and the elevation is at sea level
        // increase the counter
        if (path[i] == 'U' && elevation == 0) {
            count++
        }
    }

    return count
}

// console.log(countingValleys(8, 'DDUUUUDD'))
console.log(countingValleys(12, 'DDUUDDUDUUUD'))

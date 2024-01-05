function gridChallenge(grid) {
    let sortedGrid = grid.map((i) =>
        i.split('').sort((a, b) => {
            if (a < b) return -1
            if (a > b) return 1
            return 0
        })
    )
    console.log(sortedGrid)
    for (let i = 1; i < sortedGrid.length; i++) {
        let row = sortedGrid[i]
        let prevRow = sortedGrid[i - 1]
        for (let j = 0; j < row.length; j++) {
            if (row[j] < prevRow[j]) return 'NO'
        }
    }
    return 'YES'
}

console.log(gridChallenge(['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv']))
// console.log(gridChallenge(['mpxz', 'abcd', 'wlmf']))
// console.log(gridChallenge(['uxf', 'vof', 'hmp']))

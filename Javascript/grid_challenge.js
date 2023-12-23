// function gridChallenge(grid) {
//     let colArr = []
//     let j = 0
//     for(let i = 0; i < grid.length; i++) {
//         let arr = [...grid[i]]
//         arr.sort((a, b) => {
//             if (a < b) return -1
//             if (a > b) return 1
//             return 0
//         })
//         console.log(arr)
//         colArr.push(arr[0])
//         if (j > 0 && arr[0] < colArr[j-1]) {
//             return 'NO'
//         }
//         if (j > 0) {
//             for (let k = 0; k < arr.length; k++) {
//                 if ()
//             }
//         }
//         j++

//     }
//     return 'YES'
// }
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

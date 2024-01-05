// https://www.hackerrank.com/challenges/one-month-preparation-kit-sherlock-and-valid-string/problem

function isValid(s: string): string {
    let arr = s.split('').sort()
    let map = new Map<string, number>()

    for (let i = 0; i < arr.length; i++) {
        let count = map.get(arr[i])
        map.set(arr[i], count == undefined ? 1 : count + 1)
    }
    let vals: number[] = []
    map.forEach((val, key) => {
        vals.push(val)
    })

    vals.sort()
    let minVal = vals[0]
    let maxVal = vals[vals.length - 1]

    let set = [...new Set(vals)]

    if (minVal == maxVal) {
        return 'YES'
    }

    if (set.length > 2) {
        return 'NO'
    }

    if (
        vals.filter((i) => i == minVal).length > 1 &&
        vals.filter((i) => i == maxVal).length > 1
    ) {
        return 'NO'
    }

    if (minVal == 1 && vals.filter((i) => i == minVal).length == 1) {
        return 'YES'
    }

    if (maxVal - minVal == 1 && vals.filter((i) => i == maxVal).length == 1) {
        return 'YES'
    }

    return 'NO'
}

// console.log(isValid('aabbccddeefghi'))
// console.log(isValid('abcc'))
// console.log(isValid('aaaabbcc'))
// console.log(isValid('abbac'))
console.log(isValid('aabbc'))

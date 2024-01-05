function anagram(s: string): number {
    if (s.length % 2 !== 0) {
        return -1
    }

    let str2 = s.slice(s.length / 2).split('')
    for (let i = 0; i < s.length / 2; i++) {
        let c = s[i]
        if (str2.includes(c)) {
            str2.splice(str2.indexOf(c), 1)
        }
    }

    return str2.length
}

// console.log(anagram('xyyx'))
// console.log(anagram('aaabbb'))
// console.log(anagram('mnop'))
console.log(anagram('xyyx'))

function matchingStrings(strings: string[], queries: string[]): number[] {
    let map = new Map<string, number>()

    for (let i = 0; i < strings.length; i++) {
        if (!map.get(strings[i])) {
            map.set(strings[i], 1)
        } else {
            let count = map.get(strings[i]) as number
            map.set(strings[i], count + 1)
        }
    }

    let answer: number[] = []

    for (let i = 0; i < queries.length; i++) {
        answer.push(map.get(queries[i]) || 0)
    }

    return answer
}

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))

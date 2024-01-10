// https//www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i: number, j: number, k: number): number {
    let answer = 0

    for (let x = i; x <= j; x++) {
        let reversedNum = reverseNumber(x)
        if (Math.abs(reversedNum - x) % k == 0) {
            answer++
        }
    }

    return answer
}

function reverseNumber(n: number): number {
    let str = n.toString().split('').reverse().join('')
    return parseInt(str)
}

console.log(reverseNumber(120))
console.log(beautifulDays(20, 23, 6))

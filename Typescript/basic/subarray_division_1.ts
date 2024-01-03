// https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem

function birthday(s: number[], d: number, m: number): number {
    // Write your code here
    let answer = 0
    for (let i = 0; i < s.length; i++) {
        let total = 0
        for (let j = i; j < i + m; j++) {
            total += s[j]
        }
        if (total == d) {
            answer++
        }
    }
    return answer
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))

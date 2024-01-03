// https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem

function pangrams(s: string): string {
    // Write your code here
    let alphabets: string[] = []
    s = s.toLowerCase()
    for (let i = 0; i < s.length; i++) {
        if (!alphabets.includes(s[i]) && s[i] != ' ') {
            alphabets.push(s[i])
        }
    }
    return alphabets.length == 26 ? 'pangram' : 'not pangram'
}

console.log(
    pangrams('We promptly judged antique ivory buckles for the next prize')
)

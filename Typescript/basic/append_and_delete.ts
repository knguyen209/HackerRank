// https://www.hackerrank.com/challenges/append-and-delete/problem?isFullScreen=true
// https://www.hackerrank.com/challenges/append-and-delete/forum/comments/1369126

function appendAndDelete(s: string, t: string, k: number): string {
    if (k >= s.length + t.length) {
        return 'Yes'
    }

    let similarLength = 0

    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] != t[i]) {
            similarLength = i
            break
        }
    }

    k -= s.length - similarLength
    k -= t.length - similarLength

    return k >= 0 && k % 2 == 0 ? 'Yes' : 'No'
}

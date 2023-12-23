function authEvents(events) {
    // Write your code here
    let hashedPwd
    let goodPwds = []
    let result = []
    for (let i = 0; i < events.length; i++) {
        let [type, val] = events[i]
        if (type == 'setPassword') {
            hashedPwd = hashPassword(val)
            goodPwds = goodPasswords(val)
        }
        if (type == 'authorize') {
            let validate = authorize(hashedPwd, goodPwds, val)
            result.push(validate)
        }
    }
    return result
}

function authorize(hashedPwd, goodPwds, x) {
    if (hashedPwd == x) {
        return 1
    } else {
        if (x >= goodPwds[0] && x <= goodPwds[1]) {
            return 1
        } else return 0
    }
}

function hashPassword(s) {
    let p = 131
    let M = Math.pow(10, 9) + 7
    let n = s.length
    let total = 0
    for (let i = 1; i <= n; i++) {
        let val = s[i - 1].toString().charCodeAt(0) * Math.pow(p, n - i)
        total += val
    }
    return total % M
}

function goodPasswords(s) {
    let arr = []
    let minStr = s + String.fromCharCode(0)
    arr.push(hashPassword(minStr))
    let maxStr = s + String.fromCharCode(127)
    arr.push(hashPassword(maxStr))
    return arr
}

console.log(hashPassword('Ghnu'))

console.log(
    authEvents([
        ['setPassword', 'Ghnu'],
        ['authorize', '161413732'],
        ['authorize', '145198797'],
        ['setPassword', 'Pni'],
        ['authorize', '147286786'],
        ['setPassword', 'v1pl'],
        ['setPassword', 'rp5B'],
        ['authorize', '657214324'],
    ])
)

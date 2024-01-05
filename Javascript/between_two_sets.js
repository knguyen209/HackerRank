// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    var c = a.concat(b)
    c.sort((a, b) => a - b)
    var max = c[c.length - 1]

    var arr = []

    for (let i = 1; i <= max; i++) {
        var factorsInA = a.filter((n) => i % n == 0)
        var factorsOfB = b.filter((n) => n % i == 0)

        if (
            factorsInA.length == a.length &&
            factorsOfB.length == b.length &&
            !arr.includes(i)
        ) {
            arr.push(i)
        }
    }

    return arr.length
}

var a = [1],
    b = [72, 48]

console.log(getTotalX(a, b))

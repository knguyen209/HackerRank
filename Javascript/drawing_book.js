// https://www.hackerrank.com/challenges/one-month-preparation-kit-drawing-book/problem

function pageCount(n, p) {
    let fromFront = Math.floor(p / 2)
    let fromRear = Math.floor(n / 2 - fromFront)
    return Math.min(fromFront, fromRear)
}

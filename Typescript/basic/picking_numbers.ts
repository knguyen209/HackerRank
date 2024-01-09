// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a: number[]): number {
    let maxLength = 0
    a.sort((a, b) => b - a)
    console.log(a)
    for (let i = 0; i < a.length; i++) {
        let arr: number[] = []
        arr.push(a[i])
        for (let j = i; j < a.length; j++) {
            if (i != j && a[i] - a[j] <= 1) {
                arr.push(a[j])
            }
        }
        console.log(arr)
        maxLength = Math.max(arr.length, maxLength)
    }

    return maxLength
}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))
// console.log(pickingNumbers([4,6,5,3,3,1]))

// https://www.hackerrank.com/challenges/minimum-distances/problem
function minimumDistances(a: number[]): number {
    let distances: number[] = []

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                distances.push(j - i)
            }
        }
    }

    return distances.length > 0 ? Math.min(...distances) : -1
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]))

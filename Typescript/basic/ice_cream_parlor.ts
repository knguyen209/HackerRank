// https://www.hackerrank.com/challenges/one-month-preparation-kit-icecream-parlor/problem
function icecreamParlor(m: number, arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] + arr[j] == m) {
                return [i + 1, j + 1].sort((a, b) => a - b)
            }
        }
    }

    return []
}

// https://www.hackerrank.com/challenges/one-month-preparation-kit-tower-breakers-1/problem

function towerBreakers(n: number, m: number): number {
    if (m == 1 || n % 2 == 0) {
        return 2
    } else {
        return 1
    }
}

// https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
    let max = 0
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let sum = keyboards[i] + drives[j]
            if (sum > max && sum <= b) {
                max = sum
            }
        }
    }
    return max
}

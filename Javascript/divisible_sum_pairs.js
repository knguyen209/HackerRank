// https://www.hackerrank.com/challenges/divisible-sum-pairs

/**
 * Given an array of integers and a positive integer k,
 * Determine the number of (i, j) pairs where i < j and arr[i] + arr[j] is divisible by k
 * @param n     the length of array ar
 * @param k     the integer divisor
 * @param ar    an array of integers
 *
 * @returns     the number of pairs
 */
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    var pairs = [];

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k == 0) {
                pairs.push([ar[i], ar[j]]);
            }
        }
    }

    return pairs.length;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));

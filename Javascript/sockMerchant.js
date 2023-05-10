/**
 * Find the number of sock pairs
 * @param n     the number of socks in the pile
 * @param ar    the colors of each sock
 * @returns     the number of sock pairs
 */
function sockMerchant(n, ar) {
    // Write your code here
    var map = new Map();
    var noOfPairs = 0;

    for (let i = 0; i < n; i++) {
        if (!map.get(ar[i])) {
            map.set(ar[i], 0);
        }
        var val = map.get(ar[i]);
        val++;
        map.set(ar[i], val);
    }

    for (const item of map) {
        noOfPairs += parseInt(item[1] / 2);
    }

    return noOfPairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

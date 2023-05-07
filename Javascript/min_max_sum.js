/*
 * Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by
 * summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)
 */
function miniMaxSum(arr) {
    // Write your code here
    var sums = [];

    for (let i = 0; i < arr.length; i++) {
        var sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j];
            }
        }
        sums[i] = sum;
        console.log(sums[i]);
    }

    let min = Math.min(...sums);
    let max = Math.max(...sums);
    console.log(min + " " + max);
}

var arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);

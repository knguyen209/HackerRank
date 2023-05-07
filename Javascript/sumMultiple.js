function findSum(n, multiple) {
    // var m = Math.floor(n / multiple);
    // var sum = (multiple * m * (m - 1)) / 2;
    // console.error(m, sum);
    // return sum;
    var r = Math.floor(n / 3);
    var s = Math.floor(n / 5);
    var t = Math.floor(n / 15);

    return 0.5 * (3 * r * (r + 1) + 5 * s * (s + 1) - 15 * t * (t + 1));
}

console.log(findSum(10));

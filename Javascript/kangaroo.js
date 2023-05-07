/* https://www.hackerrank.com/challenges/kangaroo/problem?h_r=next-challenge&h_v=zen&isFullScreen=false&h_r=next-challenge&h_v=zen
 * Complete the 'kangaroo' function below.
 *
 * @param x1    1st kangaroo initial position
 * @param v1    1st kangaroo speed
 * @param x2    2nd kangaroo initial position
 * @param v2    2nd kangaroo speed
 *
 * OUTPUT: 'YES' or 'NO'
 */
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // if ((x2 > x1 && v2 > v1) || (x1 > x2 && v1 > v2) || (x1 === x2 && v1 !== v2)) {
    //     return "NO";
    // } else {
    //     var i = 1;
    //     // while (x1 + v1 * i !== x2 + v2 * i) {
    //     //     i++;
    //     // }

    //     return "YES";
    // }
    if (v1 <= v2) {
        return "NO";
    } else if ((x2 - x1) % (v1 - v2) === 0) {
        return "YES";
    } else {
        return "NO";
    }
}

kangaroo(0, 2, 5, 3);
kangaroo(0, 3, 4, 2);

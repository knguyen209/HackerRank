// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=false

/**
 * Lily wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2.
 * In this case, there are two segments meeting her criteria: [2, 2] and [1, 3].
 */

/**
 * Determine how many ways she can divide the chocolate.
 * @param s[n]  the numbers on each of the squares of chocolate
 * @param d:    Ron's birth day = sum of the segment
 * @param m     Ron's birth month = length of the segment
 *
 * Returns      int: the number of ways the bar can be divided
 */
function birthday(s, d, m) {
    // Write your code here
    var answer = [];

    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        let count = 0;
        let index = i;
        let sequence = [];
        while (count < m) {
            sum += s[index];
            count++;
            index++;
            sequence.push(s[index]);
        }
        if (sum === d && sequence.length === m) {
            answer.push(sequence);
        }
    }

    return answer.length;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
console.log(birthday([4], 4, 1));

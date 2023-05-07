//https://www.hackerrank.com/challenges/breaking-best-and-worst-record

/**
 * Input: an array of scores
 * Output int[2]: An array with the numbers of times she broke her records.
 * Index 0 is for breaking most points records, and index 1 is for breaking least points records.
 *  */
function breakingRecords(scores) {
    // Write your code here
    var answer = [0, 0];

    var min = scores[0],
        max = scores[0];

    for (let i = 1; i < scores.length; i++) {
        var score = scores[i];

        // update most breaking points records
        if (score > max) {
            max = score;
            answer[0]++;
        }

        // update least breaking points records
        if (score < min) {
            min = score;
            answer[1]++;
        }
    }

    return answer;
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

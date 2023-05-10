// https://www.hackerrank.com/challenges/migratory-birds

/**
 * Given an array of bird sightings where every element represents a bird type id,
 * determine the id of the most frequently sighted type.
 * If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 */

/**
 * Find the most sighted bird type
 * It is guaranteed that each type is 1, 2, 3, 4, or 5
 * Ex: [1, 4, 4, 4, 5, 3] => output: 4
 */
function migratoryBirds(arr) {
    // Write your code here
    var counts = Array(5).fill(0);

    for (let i = 0; i < arr.length; i++) {
        let index = (arr[i] - 1) % 5;
        counts[index]++;
    }

    var maxIndex = 0,
        maxCount = 0;
    for (let i = 0; i < 5; i++) {
        if (maxCount < counts[i]) {
            maxCount = counts[i];
            maxIndex = i;
        }
    }

    return maxIndex + 1;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));

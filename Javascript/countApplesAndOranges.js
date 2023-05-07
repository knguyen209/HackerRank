/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s    House's start point
 *  2. INTEGER t    House's end point
 *  3. INTEGER a    location of apple tree
 *  4. INTEGER b    location of orange tree
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    (s = 7), (t = 11);
    (a = 5), (b = 15);
    apples = [-2, 2, 1]; // location of apples wrt its tree
    oranges = [5, -6]; // location of oranges wrt its tree

    var appleDistances = apples.map((n) => a + n);
    var orangeDistances = oranges.map((n) => b + n);

    console.error(appleDistances);
    console.error(orangeDistances);

    let noApples = appleDistances.filter((n) => n >= s && n <= t);
    let noOranges = orangeDistances.filter((n) => n >= s && n <= t);
    console.log(noApples.length);
    console.log(noOranges.length);
}

const s = 7,
    t = 11;
const a = 5,
    b = 15;
const m = 3,
    n = 2; // m = no. of apples, n = no. of oranges
const apples = [-2, 2, 1]; // location of apples wrt its tree
const oranges = [5, -6]; // location of oranges wrt its tree

countApplesAndOranges(s, t, a, b, apples, oranges);

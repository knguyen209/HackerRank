// https://www.hackerrank.com/challenges/bon-appetit

/**
 *
 * @param bill  an array of integers representing the cost of each item ordered
 * @param k     an integer representing the zero-based index of the item Anna doesn't eat
 * @param b     the amount of money that Anna contributed to the bill
 * @return      If Brian did not overcharge Anna, print Bon Appetit
 *              otherwise, print the difference (b_charged - b_actual) that Brian must refund to Anna
 */
function bonAppetit(bill, k, b) {
    // Write your code here
    var total = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i != k) {
            total += bill[i];
        }
    }
    var bActual = total / 2;
    if (b - bActual === 0) {
        console.log("Bon Appetit");
    } else {
        console.log(b - bActual);
    }
}

bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([3, 10, 2, 9], 1, 7);

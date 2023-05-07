function change(cash) {
    // Your code goes here
    if (cash === 1) {
        return null;
    } else {
        var tens = 0,
            fives = 0,
            twos = 0;

        tens += getTenBills(cash);
        cash = cash % 10;

        // if (cash % 2 == 0) {
        //     twos += getTwoBills(cash);
        //     cash = cash % 2;
        // } else {
        //     fives += getFiveBills(cash);
        //     cash = cash % 5;
        // }

        if (cash > 5 && cash % 2 == 0) {
            twos += getTwoBills(cash);
            cash = cash % 2;
        } else {
            fives += getFiveBills(cash);
            cash = cash % 5;
            twos += getTwoBills(cash);
            cash = cash % 2;
        }

        return {
            two: twos,
            five: fives,
            ten: tens,
        };
    }
}

function getTenBills(cash) {
    return parseInt(cash / 10);
}

function getFiveBills(cash) {
    return parseInt(cash / 5);
}

function getTwoBills(cash) {
    return parseInt(cash / 2);
}

console.log(change(1)); // null

console.log(change(42).ten); // 4
console.log(change(42).five); // 0
console.log(change(42).two); // 1
// console.log(change(46)); // 3 0 4
// console.log(change(49)); // 4 0 4
// console.log(change(47)); // 4 0 4
console.log(change(6));

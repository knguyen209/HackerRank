// https://www.hackerrank.com/challenges/day-of-the-programmer

/**
 * Find the date of the 256th day of that year
 * according to the official Russian calendar during that year
 *
 * @param year
 *
 * @return dd.mm.yyyy
 */
function dayOfProgrammer(year) {
    // Write your code here
    // console.log(isLeapYearInJulian(2100))

    if (isLeapYearInGregorian(year) && isLeapYearInJulian(year)) {
        return "12.09." + year;
    }

    if (!isLeapYearInGregorian(year) && isLeapYearInJulian(year)) {
        if (year < 1918) {
            return "12.09." + year;
        } else if (year == 1918) {
            return "26.09.1918";
        } else {
            return "13.09." + year;
        }
    }

    if (year === 1918) {
        return "26.09.1918";
    }

    return "13.09." + year;
}

function isLeapYearInJulian(year) {
    return year % 4 == 0;
}

function isLeapYearInGregorian(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

console.log(dayOfProgrammer(1984)); // Expected 12.09.1984
console.log(dayOfProgrammer(2017)); // Expected 13.09.2017
console.log(dayOfProgrammer(2016)); // Expected 12.09.2016
console.log(dayOfProgrammer(1800)); // Expected 12.09.1800
console.log(dayOfProgrammer(2100)); // Expected 13.09.2100
console.log(dayOfProgrammer(1918)); // Expected 13.09.2100

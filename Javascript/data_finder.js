function dataFinder(data) {
    // Write your code here
    const find = (minRange, maxRange, value) => {
        if (minRange < 0 || maxRange > data.length - 1) {
            throw new Error("Invalid range");
        } else {
            const slicedData = data.slice(minRange, maxRange + 1);
            return slicedData.includes(value);
        }
    };

    return find;
}

// const find = dataFinder([1, 6, 3, 0, 2, 15, 10]);
// find(2, 4, 10);
const find = dataFinder([10, 1, 0, 13, 4, 15]);
console.log(find(1, 10, 13));
// find(-1, 4, 10);

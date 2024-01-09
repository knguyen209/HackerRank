function bigSorting(unsorted) {
    unsorted.sort((a, b) => {
        if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return -1
        } else {
            return a < b ? -1 : 1
        }
    })

    return unsorted
}

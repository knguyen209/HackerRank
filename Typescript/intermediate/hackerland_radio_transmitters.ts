// https://www.hackerrank.com/challenges/one-month-preparation-kit-hackerland-radio-transmitters/problem
function hackerlandRadioTransmitters(x: number[], k: number): number {
    x.sort((a, b) => a - b)
    let transmitters = 0
    let i = 0
    while (i < x.length) {
        // current house position
        let location = x[i]

        // find the rightmost house that can be covered by the transmitter
        while (i < x.length && x[i] <= location + k) {
            i++
        }
        transmitters++ // place the transmitter at the current house

        // find the next uncovered house to continue the process
        location = x[i - 1]
        while (i < x.length && x[i] <= location + k) {
            i++
        }
    }

    return transmitters
}

console.log(hackerlandRadioTransmitters([7, 2, 4, 6, 5, 9, 12, 11], 2))

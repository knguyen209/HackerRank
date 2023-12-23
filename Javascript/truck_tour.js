function truckTour(petrolpumps) {
    // Write your code here
    let n = petrolpumps.length
    let balance = 0
    for (let i = 0; i < n; i++) {
        let avail = petrolpumps[i][0]
        let cost = petrolpumps[i][1]
        balance = avail - cost
        if (balance < 0) continue
        for (let j = i + 1; j != i; j = (j + 1) % n) {
            let avail = petrolpumps[j][0]
            let cost = petrolpumps[j][1]
            balance += avail - cost
            if (balance < 0) break
        }
        if (balance >= 0) return i
    }
}

class MaxBinaryHeap {
    private arr: number[]

    constructor(arr: number[]) {
        this.arr = arr
    }

    public printHeap() {
        console.log(this.arr)
    }

    public getSize() {
        return this.arr.length
    }

    private getParentIndex(i: number): number {
        return Math.floor((i - 1) / 2)
    }

    private getLeftIndex(i: number): number {
        return 2 * i + 1
    }

    private getRightIndex(i: number): number {
        return 2 * i + 2
    }

    public maxHeapify(i: number) {
        let leftIdx = this.getLeftIndex(i)
        let rightIdx = this.getRightIndex(i)

        let largestIdx: number | null = null

        if (leftIdx < this.getSize() && this.arr[leftIdx] > this.arr[i]) {
            largestIdx = leftIdx
        } else {
            largestIdx = i
        }

        if (
            rightIdx < this.getSize() &&
            this.arr[rightIdx] > this.arr[largestIdx]
        ) {
            largestIdx = rightIdx
        }

        if (largestIdx != i) {
            let temp = this.arr[largestIdx]
            this.arr[largestIdx] = this.arr[i]
            this.arr[i] = temp
            this.maxHeapify(largestIdx)
        }
    }

    public buildMaxHeap() {
        for (let i = Math.floor(this.getSize() / 2) - 1; i >= 0; i--) {
            this.maxHeapify(i)
        }
    }
}

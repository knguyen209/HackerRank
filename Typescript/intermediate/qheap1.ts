// https://www.hackerrank.com/challenges/one-month-preparation-kit-qheap1/problem
class QHeap1 {
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

    public minHeapify(i: number) {
        let leftIdx = this.getLeftIndex(i)
        let rightIdx = this.getRightIndex(i)

        let smallestIdx: number = i

        if (leftIdx < this.getSize() && this.arr[leftIdx] < this.arr[i]) {
            smallestIdx = leftIdx
        }

        if (
            rightIdx < this.getSize() &&
            this.arr[rightIdx] < this.arr[smallestIdx]
        ) {
            smallestIdx = rightIdx
        }

        if (smallestIdx != i) {
            let temp = this.arr[i]
            this.arr[i] = this.arr[smallestIdx]
            this.arr[smallestIdx] = temp
            this.minHeapify(smallestIdx)
        }
    }

    public buildMinHeap() {
        for (let i = Math.floor(this.getSize() / 2) - 1; i >= 0; i--) {
            this.minHeapify(i)
        }
    }

    public insert(k: number) {
        this.arr.push(k)

        // Fix the min heap property if it is violated
        let i = this.arr.length - 1
        while (i > 0 && this.arr[this.getParentIndex(i)] > this.arr[i]) {
            let p = this.getParentIndex(i)
            let temp = this.arr[i]
            this.arr[i] = this.arr[p]
            this.arr[p] = temp
            i = p
        }
    }
    // Remove the minimum element (root) from the min heap
    public extractMin(): number | undefined {
        if (this.arr.length == 1) {
            return this.arr.pop()
        }

        let res = this.arr[0]
        this.arr[0] = this.arr[this.arr.length - 1]
        this.arr.pop()
        this.minHeapify(0)
        return res
    }

    public delete(val: number) {
        let idx = this.arr.indexOf(val)
        if (idx != -1) {
            let length = this.getSize()
            let temp = this.arr[length - 1]
            this.arr[length - 1] = this.arr[idx]
            this.arr[idx] = temp
            this.arr.pop()
            this.minHeapify(idx)
        }
    }

    public printTop() {
        console.log(this.arr[0])
    }
}

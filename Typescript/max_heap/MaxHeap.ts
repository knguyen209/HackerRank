// https://medium.com/@konduruharish/binary-heap-minheap-and-max-heap-in-typescript-and-c-be3cebee263e

class MaxHeap {
    private _values: number[]

    public get values(): number[] {
        return this._values
    }

    public set values(v: number[]) {
        this._values = v
    }
    constructor() {
        this._values = []
    }

    public insert(n: number): boolean {
        if (this.values.length === 0) {
            this._values.push(n)
            return true
        }

        this._values.push(n)

        return this.bubbleUp()
    }

    private bubbleUp(): boolean {
        let index = this._values.length - 1
        const element = this.values[index]
        let parentIndex = Math.floor((index - 1) / 2)

        while (parentIndex >= 0 && this._values[parentIndex] < element) {
            // if parent < child, swap the nodes
            this._values[index] = this._values[parentIndex]
            this._values[parentIndex] = element

            // Reset the indexes as we swapped the values
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
        }

        return true
    }

    public extractMax(): number {
        if (this._values.length === 0) {
            return null
        }

        // First value in the list will always be the maximum one
        let max = this._values[0]
        let end = this._values.pop()

        // Get the last element in the list to the front
        if (this._values.length > 0) {
            this._values[0] = end

            // Rebalance the heap by sinking down the node to the correct spot
            this.sinkDown()
        }

        return max
    }

    private sinkDown() {
        let parentIdx = 0
        let leftChildIdx = 0
        let rightChildIdx = 0
        let heapLength = this._values.length

        let nodeToSink = this._values[parentIdx]
        let idxToSwap = 0
        let swap = false

        // Keep looping through the nodes until find the right spot
        while (true) {
            leftChildIdx = 2 * parentIdx + 1
            rightChildIdx = 2 * parentIdx + 2

            swap = false
            let leftChild: number | null = null
            let rightChild: number | null = null

            // Check with the left child only if it is a valid index
            if (leftChildIdx < heapLength) {
                leftChild = this._values[leftChildIdx]

                // Compare with the node to sink down
                if (nodeToSink < leftChild) {
                    idxToSwap = leftChildIdx
                    swap = true
                }
            }

            // Check with the right child only if it is a valid index
            if (rightChildIdx < heapLength) {
                rightChild = this._values[rightChildIdx]
                if (
                    (swap && leftChild < rightChild) ||
                    (!swap && nodeToSink < rightChild)
                ) {
                    idxToSwap = rightChildIdx
                    swap = true
                }
            }
        }

        if (!swap) {
            // if there is no swap required, we found the correct spot for the element
            return
        } else {
            // swap the elements
            this._values[parentIdx] = this._values[idxToSwap]
            this._values[idxToSwap] = nodeToSink

            // Set the reference to index to its new value
            parentIdx = idxToSwap
        }
    }
}

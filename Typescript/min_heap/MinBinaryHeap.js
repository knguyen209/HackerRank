var MinBinaryHeap = /** @class */ (function () {
    function MinBinaryHeap(arr) {
        this.arr = arr;
    }
    MinBinaryHeap.prototype.printHeap = function () {
        console.log(this.arr);
    };
    MinBinaryHeap.prototype.getSize = function () {
        return this.arr.length;
    };
    MinBinaryHeap.prototype.getParentIndex = function (i) {
        return Math.floor((i - 1) / 2);
    };
    MinBinaryHeap.prototype.getLeftIndex = function (i) {
        return 2 * i + 1;
    };
    MinBinaryHeap.prototype.getRightIndex = function (i) {
        return 2 * i + 2;
    };
    MinBinaryHeap.prototype.minHeapify = function (i) {
        var leftIdx = this.getLeftIndex(i);
        var rightIdx = this.getRightIndex(i);
        var smallestIdx = i;
        if (leftIdx < this.getSize() && this.arr[leftIdx] < this.arr[i]) {
            smallestIdx = leftIdx;
        }
        if (rightIdx < this.getSize() &&
            this.arr[rightIdx] < this.arr[smallestIdx]) {
            smallestIdx = rightIdx;
        }
        if (smallestIdx != i) {
            var temp = this.arr[i];
            this.arr[i] = this.arr[smallestIdx];
            this.arr[smallestIdx] = temp;
            this.minHeapify(smallestIdx);
        }
    };
    MinBinaryHeap.prototype.buildMinHeap = function () {
        for (var i = Math.floor(this.getSize() / 2) - 1; i >= 0; i--) {
            this.minHeapify(i);
        }
    };
    MinBinaryHeap.prototype.insert = function (k) {
        this.arr.push(k);
        // Fix the min heap property if it is violated
        var i = this.arr.length - 1;
        while (i > 0 && this.arr[this.getParentIndex(i)] > this.arr[i]) {
            var p = this.getParentIndex(i);
            var temp = this.arr[i];
            this.arr[i] = this.arr[p];
            this.arr[p] = temp;
            i = p;
        }
    };
    // Remove the minimum element (root) from the min heap
    MinBinaryHeap.prototype.extractMin = function () {
        if (this.arr.length == 1) {
            return this.arr.pop();
        }
        var res = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();
        this.minHeapify(0);
        return res;
    };
    return MinBinaryHeap;
}());

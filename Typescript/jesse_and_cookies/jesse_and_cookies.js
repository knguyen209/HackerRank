"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../min_heap/MinBinaryHeap");
function cookies(k, A) {
    var minHeap = new MinBinaryHeap(A);
    minHeap.printHeap();
    return 0;
}
cookies(9, [2, 7, 3, 6, 4, 6]);

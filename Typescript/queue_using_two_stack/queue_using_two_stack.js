function main() {
    var myQueue = new Queue();
    myQueue.enqueue(42);
    console.log(myQueue);
    myQueue.dequeue();
    console.log(myQueue);
    myQueue.enqueue(14);
    console.log(myQueue);
    myQueue.enqueue(28);
    console.log(myQueue);
    myQueue.enqueue(60);
    console.log(myQueue);
    myQueue.dequeue();
    console.log(myQueue);
}
var Stack = /** @class */ (function () {
    function Stack() {
        this.data = new Array();
    }
    Stack.prototype.add = function (i) {
        this.data.push(i);
    };
    Stack.prototype.pop = function () {
        return this.data.pop();
    };
    Stack.prototype.top = function () {
        return this.data[0];
    };
    Stack.prototype.size = function () {
        return this.data.length;
    };
    Stack.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    Stack.prototype.clear = function () {
        this.data = new Array();
    };
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.enqueueStack = new Stack();
        this.dequeueStack = new Stack();
    }
    Queue.prototype.enqueue = function (i) {
        this.enqueueStack.add(i);
    };
    Queue.prototype.dequeue = function () {
        this.dequeueStack.clear();
        var top = this.enqueueStack.top();
        while (this.enqueueStack.size() > 1) {
            this.dequeueStack.add(this.enqueueStack.pop());
        }
        this.enqueueStack.clear();
        while (this.dequeueStack.size() > 0) {
            this.enqueueStack.add(this.dequeueStack.pop());
        }
        return top;
    };
    Queue.prototype.print = function () {
        console.log(this.enqueueStack.top());
    };
    return Queue;
}());
main();

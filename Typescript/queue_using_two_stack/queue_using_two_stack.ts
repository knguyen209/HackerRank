function main() {
    let myQueue = new Queue<number>()
    myQueue.enqueue(42)
    console.log(myQueue)
    myQueue.dequeue()
    console.log(myQueue)
    myQueue.enqueue(14)
    console.log(myQueue)
    myQueue.enqueue(28)
    console.log(myQueue)
    myQueue.enqueue(60)
    console.log(myQueue)
    myQueue.dequeue()
    console.log(myQueue)
}

class Stack<T> {
    private data = new Array<T>()

    public add(i: T) {
        this.data.push(i)
    }

    public pop(): T | undefined {
        return this.data.pop()
    }

    public top(): T | undefined {
        return this.data[0]
    }

    public size(): number {
        return this.data.length
    }

    public isEmpty(): boolean {
        return this.data.length === 0
    }

    public clear() {
        this.data = new Array<T>()
    }
}

class Queue<T> {
    private enqueueStack = new Stack<T>()
    private dequeueStack = new Stack<T>()

    public enqueue(i: T) {
        this.enqueueStack.add(i)
    }

    public dequeue(): T | undefined {
        this.dequeueStack.clear()
        let top = this.enqueueStack.top()
        while (this.enqueueStack.size() > 1) {
            this.dequeueStack.add(this.enqueueStack.pop() as T)
        }
        this.enqueueStack.clear()

        while (this.dequeueStack.size() > 0) {
            this.enqueueStack.add(this.dequeueStack.pop() as T)
        }

        return top
    }

    public print() {
        console.log(this.enqueueStack.top())
    }
}

main()

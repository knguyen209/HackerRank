class MQueue<T> {
    private data = new Array<T>()

    public enqueue(i: T) {
        this.data.push(i)
    }

    public dequeue(): T {
        let firstElement = this.data[0]
        this.data = [...this.data.slice(1, this.data.length)]
        return firstElement
    }

    public printTop() {
        console.log(this.data[0])
    }
}

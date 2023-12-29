// https://www.hackerrank.com/challenges/one-week-preparation-kit-simple-text-editor/problem

function main() {
    // Enter your code here
    let q = parseInt(readLine())
    let textEditor = new TextEditor()
    for (let i = 0; i < q; i++) {
        let ops = readLine().split(' ')
        if (ops[0] == '1') {
            textEditor.append(ops[1])
        }
        if (ops[0] == '2') {
            textEditor.delete(parseInt(ops[1]))
        }
        if (ops[0] == '3') {
            textEditor.print(parseInt(ops[1]))
        }
        if (ops[0] == '4') {
            textEditor.undo()
        }
    }
}

class TextEditor {
    private s: string = ''
    private prevStates: Array<string> = []

    public append(w: string) {
        this.prevStates.push(this.s)
        this.s = this.s.concat(w)
    }

    public delete(k: number) {
        this.prevStates.push(this.s)
        this.s = this.s.substring(0, this.s.length - k)
    }

    public print(k: number) {
        console.log(this.s[k - 1])
    }

    public undo() {
        let prevS = this.prevStates.pop()
        this.s = prevS ? prevS : ''
    }

    public printString() {
        console.log(this.s)
    }
}

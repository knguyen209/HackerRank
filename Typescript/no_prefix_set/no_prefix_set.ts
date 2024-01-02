// https://www.hackerrank.com/challenges/one-week-preparation-kit-no-prefix-set/problem

class TreeNode {
    private value: string
    private children: TreeNode[]
    private isLastChar: boolean

    constructor(value: string) {
        this.value = value
        this.children = []
        this.isLastChar = false
    }

    public insert(chars: string[]): boolean {
        if (chars.length == 0) {
            this.isLastChar = true
            return true
        }

        let char = chars.shift()
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].value == char) {
                if (this.children[i].isLastChar) {
                    return false
                }
                if (!this.children[i].isLastChar && chars.length == 0) {
                    return false
                }
                return this.children[i].insert(chars)
            }
        }
        let node = new TreeNode(char as string)
        this.children.push(node)
        node.insert(chars)

        return true
    }
}

function noPrefix(words: string[]) {
    let root = new TreeNode('')
    for (let i = 0; i < words.length; i++) {
        let arr = words[i].split('')
        if (!root.insert(arr)) {
            console.log('BAD SET')
            console.log(words[i])
            return
        }
    }
    console.log('GOOD SET')
}

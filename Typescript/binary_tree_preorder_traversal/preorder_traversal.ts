class BTreeNode {
    private value: number
    private left: BTreeNode | undefined
    private right: BTreeNode | undefined

    constructor(value: number) {
        this.value = value
        this.left = undefined
        this.right = undefined
    }

    public getValue(): number {
        return this.value
    }
    public getLeftNode(): BTreeNode | undefined {
        return this.left
    }
    public getRightNode(): BTreeNode | undefined {
        return this.right
    }

    public setLeftNode(n: BTreeNode | undefined) {
        this.left = n
    }

    public setRightNode(n: BTreeNode | undefined) {
        this.right = n
    }
}

class BinaryTree {
    private root: BTreeNode | undefined

    constructor() {
        this.root = undefined
    }

    public insert(value: number) {
        if (this.root === undefined) {
            this.root = new BTreeNode(value)
        } else {
            let node = this.root
            const searchTree = (node: BTreeNode) => {
                if (value < node.getValue()) {
                    if (node.getLeftNode()) {
                        searchTree(node.getLeftNode()!)
                    } else {
                        node.setLeftNode(new BTreeNode(value))
                    }
                }
                if (value > node.getValue()) {
                    if (node.getRightNode()) {
                        searchTree(node.getRightNode()!)
                    } else {
                        node.setRightNode(new BTreeNode(value))
                    }
                }
            }
            searchTree(node)
        }
    }

    public getRoot(): BTreeNode | undefined {
        return this.root
    }

    private printPreorder(node: BTreeNode | undefined, arr: number[]) {
        if (!node) {
            return
        }

        arr.push(node?.getValue())

        this.printPreorder(node.getLeftNode(), arr)
        this.printPreorder(node.getRightNode(), arr)
    }

    public preorderTraversal(): string {
        let arr: number[] = []
        this.printPreorder(this.root, arr)
        return arr.join(' ')
    }
}

let tree = new BinaryTree()
let input = '1 14 3 7 4 5 15 6 13 10 11 2 12 8 9'.split(' ')
for (let i = 0; i < input.length; i++) {
    tree.insert(parseInt(input[i]))
}
console.log(tree.preorderTraversal())

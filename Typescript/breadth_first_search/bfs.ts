class Graph {
    private edges: number[][]

    /**
     * Constructor initialize a graph of n nodes
     * @param n number of nodes
     */
    constructor(n: number) {
        this.edges = []
        for (let i = 0; i < n; i++) {
            this.edges[i] = []
        }
    }

    public addEdge(n1: number, n2: number) {
        this.edges[n1 - 1].push(n2 - 1)
        // this.edges[n2 - 1].push(n1 - 1)
    }

    /**
     * Breadth first search
     * @param s start node
     */
    public bfs(s: number) {
        let visited: boolean[] = new Array(this.edges.length).fill(false)
        let distances = new Array(this.edges.length).fill(-1)
        let queue: number[] = []

        // Add the start node to the queue, mark as visited
        queue.push(s - 1)
        visited[s - 1] = true
        distances[s - 1] = 0
        while (queue.length > 0) {
            let head = queue[0]
            if (head != undefined) {
                let neighbors = this.edges[head]
                neighbors.forEach((n) => {
                    if (visited[n] == false) {
                        visited[n] = true
                        queue.push(n)
                        distances[n] = distances[head] + 6
                    }
                })
            }
            queue.shift()
        }

        return distances.filter((d) => d != 0)
    }
}

/**
 *
 * @param n: number of nodes
 * @param m : number of edges
 * @param edges
 * @param s: start node
 * @returns
 */

function bfs(n: number, m: number, edges: number[][], s: number): number[] {
    let graph = new Graph(n)
    for (let i = 0; i < m; i++) {
        if (edges[i]) {
            graph.addEdge(edges[i][0], edges[i][1])
        }
    }
    let result = graph.bfs(s)
    return result
}

// console.log(bfs(4, 2, [[1, 2], [1, 3]], 1))
console.log(
    bfs(
        5,
        3,
        [
            [1, 2],
            [1, 3],
            [3, 4],
        ],
        1
    )
)

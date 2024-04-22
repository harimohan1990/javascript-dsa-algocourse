class ShortestPathBFS {
    static bfs(graph, S, par, dist) {
        const q = [];
        dist[S] = 0;
        q.push(S);

        while (q.length > 0) {
            const node = q.shift();

            for (const neighbor of graph[node]) {
                if (dist[neighbor] === Infinity) {
                    par[neighbor] = node;
                    dist[neighbor] = dist[node] + 1;
                    q.push(neighbor);
                }
            }
        }
    }

    static printShortestDistance(graph, S, D, V) {
        const par = Array(V).fill(-1);
        const dist = Array(V).fill(Infinity);
        ShortestPathBFS.bfs(graph, S, par, dist);

        if (dist[D] === Infinity) {
            console.log("Source and Destination are not connected");
            return;
        }

        const path = [];
        let currentNode = D;
        path.push(D);
        while (par[currentNode] !== -1) {
            path.push(par[currentNode]);
            currentNode = par[currentNode];
        }

        // Concatenate the path elements into a single string
        const pathString = path.reverse().join(" ");
        console.log(pathString);
    }

    static main() {
        // no. of vertices
        const V = 8;
        // Source and Destination vertex
        const S = 2, D = 6;
        // Edge list
        const edges = [
            [0, 1], [1, 2], [0, 3], [3, 4],
            [4, 7], [3, 7], [6, 7], [4, 5],
            [4, 6], [5, 6]
        ];

        // Array to store the graph as an adjacency list
        const graph = Array.from({ length: V }, () => []);

        for (const edge of edges) {
            graph[edge[0]].push(edge[1]);
            graph[edge[1]].push(edge[0]);
        }

        ShortestPathBFS.printShortestDistance(graph, S, D, V);
    }
}

// Run the main function
ShortestPathBFS.main();
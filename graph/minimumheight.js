// JavaScript program to find root which gives minimum height to tree
class Graph {
	constructor(V) {
		this.V = V;
		this.adj = new Array(V).fill(null).map(() => []);
		this.degree = new Array(V).fill(0);
	}

	// Method to add an edge
	addEdge(v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.degree[v]++;
		this.degree[w]++;
	}

	// Method to return roots which gives minimum height to tree
	rootForMinimumHeight() {
		const q = []; // first enqueue all leaf nodes in queue
		for (let i = 0; i < this.V; i++) {
			if (this.degree[i] === 1) {
				q.push(i);
			}
		}

		// loop until total vertex remains less than 2
		while (this.V > 2) {
			const popEle = q.length;
			this.V -= popEle; // popEle number of vertices will be popped

			for (let i = 0; i < popEle; i++) {
				const t = q.shift();

				// for each neighbour, decrease its degree and
				// if it become leaf, insert into queue
				for (let j = 0; j < this.adj[t].length; j++) {
					const neighbour = this.adj[t][j];
					this.degree[neighbour]--;
					if (this.degree[neighbour] === 1) {
						q.push(neighbour);
					}
				}
			}
		}

		// copying the result from queue to result array
		const res = [];
		while (q.length > 0) {
			res.push(q.shift());
		}
		return res;
	}
}

// Driver code
const g = new Graph(6);
g.addEdge(0, 3);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(4, 3);
g.addEdge(5, 4);

// Function Call
const res = g.rootForMinimumHeight();
console.log(res.join(" "));

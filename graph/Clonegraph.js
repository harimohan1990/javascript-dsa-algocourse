// A Javascript program to Clone an Undirected Graph

// program to implement queue data structure
class Queue {
    constructor() {
        this.items = [];
    }
    
    // add element to the queue
    push(element) {
        return this.items.push(element);
    }
    
    // remove element from the queue
    pop() {
        if (this.items.length > 0) {
        return this.items.shift();
        }
    }
    
    // view the front element
    front() {
        return this.items[0];
    }
    
    // check if the queue is empty
    empty() {
        return this.items.length == 0;
    }
    
    // the size of the queue
    size() {
        return this.items.length;
    }
    
    // empty the queue
    clear() {
        this.items = [];
    }
    }
    class GraphNode {
    constructor() {
        this.val;
        //A neighbour array which contains addresses to
        //all the neighbours of a GraphNode
        this.neighbours = new Array();
    }
    }
    class Graph {
    // A function which clones a Graph and
    // returns the address to the cloned
    // src node
    cloneGraph(src) {
        //A Map to keep track of all the
        //nodes which have already been created
        let m = new Map();
        let q = new Queue();
    
        // Enqueue src node
        q.push(src);
        let node;
    
        // Make a clone Node
        node = new GraphNode();
        node.val = src.val;
    
        // Put the clone node into the Map
        m.set(src, node);
        while (!q.empty()) {
        //Get the front node from the queue
        //and then visit all its neighbours
        let u = q.front();
        q.pop();
        let v = u.neighbours;
        let n = v.length;
        for (let i = 0; i < n; i++) {
            // Check if this node has already been created
            if (m.get(v[i]) == null) {
            // If not then create a new Node and
            // put into the Map
            node = new GraphNode();
            node.val = v[i].val;
            m.set(v[i], node);
            q.push(v[i]);
            }
    
            // add these neighbours to the cloned graph node
            m.get(u).neighbours.push(m.get(v[i]));
        }
        }
    
        // Return the address of cloned src Node
        return m.get(src);
    }
    
    // Build the desired graph
    buildGraph() {
        /*
            Note : All the edges are Undirected
            Given Graph:
            1--2
            | |
            4--3
        */
        let node1 = new GraphNode();
        node1.val = 1;
        let node2 = new GraphNode();
        node2.val = 2;
        let node3 = new GraphNode();
        node3.val = 3;
        let node4 = new GraphNode();
        node4.val = 4;
        let v = new Array();
        v.push(node2);
        v.push(node4);
        node1.neighbours = v;
        v = [];
        v.push(node1);
        v.push(node3);
        node2.neighbours = v;
        v = [];
        v.push(node2);
        v.push(node4);
        node3.neighbours = v;
        v = [];
        v.push(node3);
        v.push(node1);
        node4.neighbours = v;
        return node1;
    }
    
    // A simple bfs traversal of a graph to
    // check for proper cloning of the graph
    bfs(src) {
        let visit = new Map();
        let q = new Queue();
        q.push(src);
        visit.set(src, true);
        while (!q.empty()) {
        let u = q.front();
        console.log("Value of Node " + u.val);
        console.log("Address of Node " + u);
        q.pop();
        let v = u.neighbours;
        let n = v.length;
        for (let i = 0; i < n; i++) {
            if (visit.get(v[i]) === undefined) {
            visit.set(v[i], true);
            q.push(v[i]);
            }
        }
        }
        console.log("	 ");
    }
    }
    
    // Driver program to test above function
    let graph = new Graph();
    let src = graph.buildGraph();
    console.log("BFS Traversal before cloning");
    graph.bfs(src);
    let newsrc = graph.cloneGraph(src);
    console.log("BFS Traversal after cloning");
    graph.bfs(newsrc);

    
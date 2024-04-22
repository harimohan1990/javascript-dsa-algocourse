

	// JavaScript implementation to find
	// the minimum time required to
	// visit special nodes of a tree
	
	let N = 100005;

	// Time required to collect
	let ans = [];
	let flag = [];

	// Minimum time required to reach
	// all the special nodes of tree
	function minimumTime(u, par, hasApple, adj)
	{

		// Condition to check if
		// the vertex has apple
		if (hasApple[u] == true)
			flag[u] = 1;

		// Iterate all the
		// adjacent of vertex u.
		for(let it = 0; it < adj[u].length; it++)
		{

			// If adjacent vertex
			// is it's parent
			if (adj[u][it] != par)
			{
				minimumTime(adj[u][it], u, hasApple, adj);

				// If any vertex of subtree
				// it contain apple
				if (flag[adj[u][it]] > 0)
					ans[u] = ans[u] + ans[adj[u][it]] + 2 ;

				// flagbit for node u
				// would be on if any vertex
				// in it's subtree contain apple
				flag[u] = flag[u] | flag[adj[u][it]];
			}
		}
	}
	
	// Number of the vertex.
	let n = 7;

	ans = [];
	flag = [];
	
	for(let i = 0; i < N; i++)
	{
		ans.push(0);
		flag.push(0);
	}
	
	let hasApple = [];
	hasApple.push(false);
	hasApple.push(false);
	hasApple.push(true);
	hasApple.push(false);
	hasApple.push(true);
	hasApple.push(true);
	hasApple.push(false);

	// Store all the edges,
	// any edge represented
	// by pair of vertex
	let edges = [];

	// Added all the edge in
	// edges vector.
	edges.push([0, 1]);
	edges.push([0, 2]);
	edges.push([1, 4]);
	edges.push([1, 5]);
	edges.push([2, 3]);
	edges.push([2, 6]);

	// Adjacent list
	let adj = new Array(n);

	for(let i = 0; i < n; i++)
	{
		adj[i] = [];
	}

	for(let i = 0; i < edges.length; i++)
	{
		let source_node = edges[i][0];
		let destination_node = edges[i][1];

		adj[source_node].push(destination_node);
		adj[destination_node].push(source_node);
	}

	// Function Call
	minimumTime(0, -1, hasApple, adj);
	
	document.write(ans[0]);


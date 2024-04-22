

	// JavaScript Program for Lowest Common 
	// Ancestor in a Binary Tree
	// A O(n) solution to find LCA of 
	// two given values n1 and n2
	
	class Node
	{
		constructor(value) {
		this.left = null;
		this.right = null;
		this.data = value;
		}
	}
	
	let root;
	let path1 = [];
	let path2 = [];

	// Finds the path from root node to given root of the tree.
	function findLCA(n1, n2) {
		path1 = [];
		path2 = [];
		return findLCAInternal(root, n1, n2);
	}

	function findLCAInternal(root, n1, n2) {

		if (!findPath(root, n1, path1) || !findPath(root, n2, path2)) 
		{
			document.write((path1.length > 0) ? 
			"n1 is present" : "n1 is missing");
			document.write((path2.length > 0) ? 
			"n2 is present" : "n2 is missing");
			return -1;
		}

		let i;
		for (i = 0; i < path1.length && i < path2.length; i++) {
			
		// System.out.println(path1.get(i) + " " + path2.get(i));
			if (path1[i] != path2[i])
				break;
		}

		return path1[i-1];
	}
	
	// Finds the path from root node to 
	// given root of the tree, Stores the
	// path in a vector path[], returns true
	// if path exists otherwise false
	function findPath(root, n, path)
	{
		// base case
		if (root == null) {
			return false;
		}
		
		// Store this node . The node will be removed if
		// not in path from root to n.
		path.push(root.data);

		if (root.data == n) {
			return true;
		}

		if (root.left != null && findPath(root.left, n, path)) {
			return true;
		}

		if (root.right != null && findPath(root.right, n, path)) {
			return true;
		}

		// If not present in subtree rooted with root, 
		// remove root from
		// path[] and return false
		path.pop();

		return false;
	}
	
	root = new Node(1);
	root.left = new Node(2);
	root.right = new Node(3);
	root.left.left = new Node(4);
	root.left.right = new Node(5);
	root.right.left = new Node(6);
	root.right.right = new Node(7);

	document.write("LCA(4, 5) = " + findLCA(4,5) + "</br>");
	document.write("LCA(4, 6) = " + findLCA(4,6) + "</br>");
	document.write("LCA(3, 4) = " + findLCA(3,4) + "</br>");
	document.write("LCA(2, 4) = " + findLCA(2,4));



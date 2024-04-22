

// JavaScript program to calculate width of binary tree

/* A binary tree node has data, pointer to left child
and a pointer to right child */
class Node {
	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}
	var root;

	/* Function to get the maximum width of a binary tree*/
	function getMaxWidth(node)
	{
		var maxWidth = 0;
		var width;
		var h = height(node);
		var i;

		/* Get width of each level and compare
		the width with maximum width so far */
		for (i = 1; i <= h; i++) {
			width = getWidth(node, i);
			if (width > maxWidth)
				maxWidth = width;
		}

		return maxWidth;
	}

	/* Get width of a given level */
	function getWidth(node , level)
	{
		if (node == null)
			return 0;

		if (level == 1)
			return 1;
		else if (level > 1)
			return getWidth(node.left, level - 1)
				+ getWidth(node.right, level - 1);
		return 0;
	}

	/* UTILITY FUNCTIONS */

	/* Compute the "height" of a tree -- the number of
	nodes along the longest path from the root node
	down to the farthest leaf node.*/
	function height(node)
	{
		if (node == null)
			return 0;
		else {
			/* compute the height of each subtree */
			var lHeight = height(node.left);
			var rHeight = height(node.right);

			/* use the larger one */
			return (lHeight > rHeight) ? (lHeight + 1)
									: (rHeight + 1);
		}
	}

	/* Driver code */
	
		/*
		Constructed binary tree is:
			1
			/ \
		2 3
		/ \ \
		4 5	 8
				/ \
				6 7
		*/
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);
		root.right.right = new Node(8);
		root.right.right.left = new Node(6);
		root.right.right.right = new Node(7);

		// Function call
		document.write("Maximum width is "
						+ getMaxWidth(root));
// This code is contributed by todaysgaurav 



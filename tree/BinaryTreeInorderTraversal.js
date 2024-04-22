// JavaScript program for inorder traversals

// Structure of a Binary Tree Node
class Node {
	constructor(v) {
		this.data = v;
		this.left = null;
		this.right = null;
	}
}

// Function to print inorder traversal
function printInorder(node) {
	if (node === null) {
		return;
	}
	
	// First recur on left subtree
	printInorder(node.left);
	
	// Now deal with the node
	console.log(node.data);
	
	// Then recur on right subtree
	printInorder(node.right);
}

// Driver code
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

// Function call
console.log("Inorder traversal of binary tree is: ");
printInorder(root);

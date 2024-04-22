// JavaScript Program for the above approach

// A binary tree node has data, pointer to left child
// and a pointer to right child
class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// Helper function that allocates a new node with the
// given data and NULL left and right pointers.
function newNode(data){
	let node = new Node(data);
	return node;
}

function maxValue(node){
	if(node == null) return Number.MIN_VALUE;
	
	let value = node.data;
	let leftMax = maxValue(node.left);
	let rightMax = maxValue(node.right);
	
	return Math.max(value, Math.max(leftMax, rightMax));
}

function minValue(node){
	if(node == null) return Number.MAX_VALUE;
	
	let value = node.data;
	let leftMax = minValue(node.left);
	let rightMax = minValue(node.right);
	
	return Math.min(value, Math.min(leftMax, rightMax));
}

// Returns true if a binary tree is a binary search tree
function isBST(node){
	if(node == null) return 1;
	
	// false if the max of the left is > than us
	if(node.left != null && maxValue(node.left) > node.data)
		return 0;
	
	// false if the min of the right is <= than us
	if(node.right != null && minValue(node.right) < node.data)
		return 0;
		
	// false if, recursively, the left or right is not a BST
	if(!isBST(node.left) || !isBST(node.right))
		return 0;
		
	// passing all that, it's a BST
	return 1;
}

// Driver code
let root = newNode(4);
root.left = newNode(2)
root.right = newNode(5)

// root.right.left = Node(7)
root.left.left = newNode(1)
root.left.right = newNode(3)

// Function call
if(isBST(root))
	console.log("Is BST");
else
	console.log("Not a BST");


// Structure of a Binary Tree Node
class Node {
    constructor(v) {
      this.data = v;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to print preorder traversal
  function printPreorder(node) {
    if (node === null) {
      return;
    }
  
    // Deal with the node
    console.log(node.data);
  
    // Recur on left subtree
    printPreorder(node.left);
  
    // Recur on right subtree
    printPreorder(node.right);
  }
  
  // Driver code
  function main() {
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.right = new Node(6);
  
    // Function call
    console.log("Preorder traversal of binary tree is:");
    printPreorder(root);
  }
  
  main();
  
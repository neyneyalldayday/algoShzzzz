// the distance between a node in a binary tree iand the treees root is 
// called the nodes depth 
// write a function that takes in a binary tree and returns the sum
// of its  nodes depths 
// each binary tree node has an integer value, a left child node, and a right child node
// Children nodes can either be binary tree nodes themselves of none/null.


{
    "tree": {
      "nodes": [
        {"id": "1", "left": "2", "right": "3", "value": 1},
        {"id": "2", "left": "4", "right": "5", "value": 2},
        {"id": "3", "left": "6", "right": "7", "value": 3},
        {"id": "4", "left": "8", "right": "9", "value": 4},
        {"id": "5", "left": null, "right": null, "value": 5},
        {"id": "6", "left": null, "right": null, "value": 6},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "9", "left": null, "right": null, "value": 9}
      ],
      "root": "1"
    }
  }
  Test Case 2
  {
    "tree": {
      "nodes": [
        {"id": "1", "left": null, "right": null, "value": 1}
      ],
      "root": "1"
    }
  }
  Test Case 3
  {
    "tree": {
      "nodes": [
        {"id": "1", "left": "2", "right": null, "value": 1},
        {"id": "2", "left": null, "right": null, "value": 2}
      ],
      "root": "1"
    }
  }


  function nodeDepths(root) {
    // Write your code here.
  return sumDepth(root, 0) 
  }
  
   function sumDepth(node, level) {
      if(!node) return 0;
      return level + sumDepth(node.left, level + 1) + sumDepth(node.right, level + 1);
    }
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  


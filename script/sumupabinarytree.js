// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root, treeSum = 0 ,sumsArray = []) {
    // Write your code here.
    let mathTree = root.value + treeSum 
  
    if(!root.left && !root.right) {
      sumsArray.push(mathTree)
    }
  
    if(root.left){
      branchSums(root.left, mathTree, sumsArray)
    }
  
    if(root.right){
      branchSums(root.right, mathTree , sumsArray)
    }
  
    return sumsArray
   
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;

  //its interesting that you dont have to loop through
  //a binary tree. you just sort of do things.
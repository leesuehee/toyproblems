var BinarySearchTree = function(value) {
  var binaryTree = {};
  
  binaryTree.value = value;
  binaryTree.right = null;
  binaryTree.left  = null;
  
  binaryTree.insert = function(value) {
    let node = BinarySearchTree(value);  

    let recurse = function (tree) {
      if (value > tree.value) {
        if (tree.right === null) {
          tree.right = node;
          return tree;
        } else { 
          recurse(tree.right) 
        };   
      } else {
        if (tree.left === null) {
          tree.left = node;
          return tree;  
        } else { 
          recurse(tree.left) 
        }
      };
    };  

    recurse(this);
  }; 
  
  binaryTree.contains = function(value) {
  // traverse entire tree the moment the value is found return a boolean
  // basecase if when all the roots are reached or a value is met
  

  };
  
  binaryTree.depthFirstLog = function() {
    
  };
      
  return binaryTree;
};


/*
 * Complexity: 
 */

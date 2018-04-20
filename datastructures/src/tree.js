var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  
  newTree.addChild = function(value) {
    let child = Tree(value);
    this.children.push(child);
  };
  
  newTree.contains = function(target) {
    // iterate trough the parent's children and their children/s children

    let recurse = function(node) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].value === target) {
          return true;
        } 
        recurse(node.children[i]);
      };
    }
    recurse(target);
    return false;
  };

  return newTree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

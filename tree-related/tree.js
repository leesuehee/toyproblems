var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  
  newTree.addChild = function(value) {
    let child = Tree(value);
    this.children.push(child);
  };
  
  newTree.contains = function(target) {
    let output = false;

    var recurse = function(node) {
      if (node.value === target) {
        output = true;
      } else {
        for (let i = 0; i < node.children.length; i++) {
          recurse(node.children[i]);
        };       
      }; 
    };
    recurse(this);
    return output;
  };

  return newTree;
};



/*
 * N 
 */

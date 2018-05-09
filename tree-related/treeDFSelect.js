var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
  return child;
};

Tree.prototype.DFSelect = function(cb) {
  var arr = [];
  var depth = 0;

  var recurse = function(node, depth) {
    if(node.children === []) return;
    if (cb(node.value, depth)) arr.push(node.value);
    depth++;

    for(var i = 0; i < node.children.length; i++) {
      recurse(node.children[i], depth);
    }  
  };
  
  recurse(this, depth);
  return arr;
};

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.DFSelect(function (value, depth) {
  return value % 2;
})
// [1, 5, 3, 7]
root1.DFSelect(function (value, depth) {
  return depth === 1;
})
// [2, 3]

var fun = (value, depth) => {
  return value % 2;
};

var fn = (value, depth) => {
  return depth === 1
};

console.log(root1.DFSelect(fn))

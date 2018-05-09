let Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  let child = new Tree(value);
  this.children.push(child);
  return child;
};

Tree.prototype.map = function(cb) {
  let root = new Tree(cb(this.value));

  let recurse = function(node) {
    
  }
};

Tree.prototype.mapInPlace = function(cb) {

  let recurse = function(node) {
    if (node.children === []) return node;   
    node.value = cb(node.value);
  
    for(let i = 0; i < node.children.length; i++) {
      recurse(node.children[i]);
    };     
  };

  let copy = this;
  recurse(copy);
  return copy;
};



var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

var newTree = root1.mapInPlace(function (value) {
  return value * 2;
});

newTree.value // 2
newTree.children[0].value // 4
newTree.children[1].value // 6

newTree.children[0].children[1].value // 10
newTree.children[1].children[1].value // 14

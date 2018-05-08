let Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  let child = new Tree(value);
  this.children.push(child);
  return child;
}

Tree.prototype.BFSelect = function(cb) {
  let arr = [];
  let depth = 0;
  if (cb(this.value)) arr.push(this.value);

  let recurse = function(node, depth) {
    if(node.children.length === 0) return;
    depth++;

    for(let i = 0; i < node.children.length; i++) {
      if (cb(node.children[i].value)) arr.push(node.children[i].value);
    }
    
    for (let j = 0; j < node.children.length; j++) {
      recurse(node.children[j], depth)
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

let fn1 = function (value, depth) {
  return value % 2;
}
// [1, 3, 5, 7]
let fn2 = function (value, depth) {
  return depth === 1;
}
// [2, 3]

console.log(root1.BFSelect(fn1))
console.log(root1.BFSelect(fn2))


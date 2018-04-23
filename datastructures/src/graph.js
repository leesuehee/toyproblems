
var Graph = function(value) {
  this.store = {};
};

Graph.prototype.addNode = function(node) {
  this.store[node] = [];
};

Graph.prototype.contains = function(node) {
  return (this.store[node]!==undefined);
};

Graph.prototype.removeNode = function(node) {
  for (let nodeVal in this.store) {
    if (this.store[nodeVal].indexOf(node) > -1) {
      let index = this.store[nodeVal].indexOf(node);
      this.store[nodeVal].splice(index,1);
    };
  };
  delete this.store[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.store[fromNode].indexOf(toNode) > -1);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.store[fromNode].push(toNode);
  this.store[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  let indexFrom = this.store[fromNode].indexOf(toNode);
  let indexTo = this.store[toNode].indexOf(fromNode);
  this.store[fromNode].splice(indexFrom,1);
  this.store[toNode].splice(indexTo,1);
};

Graph.prototype.forEachNode = function(cb) {
  for (let nodeVal in this.store) {
    cb(nodeVal);
  }
};



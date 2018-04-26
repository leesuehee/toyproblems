var Queue = function() {
  this.store = [];
  this.size = 0;
};

Queue.prototype.enqueue = function(value) {
  this.store[this.size] = value;
  this.size++;
};

Queue.prototype.dequeue = function() {
  var hold = this.store[0];
  console.log(hold)
  this.store.splice(0,1);
  return hold;
};

Queue.prototype.contains = function(value) {
  return (this.store.indexOf(value) > -1)? true: false;
};

Queue.prototype.size = function() {
  return this.store.length;
};

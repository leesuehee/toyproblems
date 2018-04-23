let Stack = function() {
  this.store = {};
  this.size = 0;
};

Stack.prototype.push = function(value) {
  this.size++;
  this.store[this.size] = value;
};

Stack.prototype.pop = function() {
  let hold = this.store[this.size];
  delete this.store[this.size];
  this.size--;
  return hold;
};

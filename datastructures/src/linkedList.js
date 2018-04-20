
let Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

let LinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

  }
  list.removeHead = function() {
    let hold = this.head.value;
    this.head = this.head.next;
    console.log(this.head)
    return hold
  };

  list.contains = function(target) {
    
  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



let Node = function(value) {
  let content = {};
  content.value = value;
  content.next = null;

  return content;
};

let LinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);
    
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    };
  };

  list.removeHead = function(value) {
    let holdHead = this.head.value;
    this.head = this.head.next;
    
    return holdHead;
  };

  list.contains = function(target) {  
    let temp = list;

    let checkNext = function(node) {
      if (node.value === target) return true; 
      else { 
        if (!node.next) return false;
        return checkNext(node.next);
      };
    };
    
    return (checkNext(this.head))? true: false;
  }

  return list;
};



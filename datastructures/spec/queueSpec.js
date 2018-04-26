describe('queue', function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('should add values to the end of the queue', function(){
    queue.enqueue(5);
    expect(queue.size).to.equal(1);
    queue.enqueue(2);
    expect(queue.size).to.equal(2);
  });

  
  it('should remove values from the front queue', function(){
    queue.enqueue(5);
    queue.enqueue(2);
    queue.enqueue(12);
    queue.enqueue(1);
    expect(queue.dequeue()).to.equal(5);
    expect(queue.dequeue()).to.equal(2);
  });

  it('should return a boolean whether input value is in the queue', function(){
    queue.enqueue(7);
    queue.enqueue(2);
    expect(queue.contains(7)).to.equal(true);
    expect(queue.contains(1)).to.equal(false);
  });

  it('should determine the size of a queue', function(){
    queue.enqueue(5);
    queue.enqueue(2);
    expect(queue.size).to.equal(2);
  });
 
});
describe('stack', function() {
  let stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it('should have a size property, and pop & push methods', function() {
    expect(stack).to.have.property('size');
    expect(stack.pop).to.be.a('function');
    expect(stack.push).to.be.a('function');
  });

  it('should increase size a values are pushed to the stack', function() {
    stack.push(5);
    expect(stack.size).to.equal(1);
    stack.push(3);
    expect(stack.size).to.equal(2);
  });

  it('should remove and return from the top of the stack when pop() is called',function() {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).to.equal(3);
    expect(stack.pop()).to.equal(2);
  });

  it('should adjust size property accordingly',function() {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size).to.equal(3);
    expect(stack.pop()).to.equal(3);
    expect(stack.size).to.equal(2);
    expect(stack.pop()).to.equal(2);
    expect(stack.size).to.equal(1);
    stack.push(5);
    expect(stack.size).to.equal(2);
  });
});
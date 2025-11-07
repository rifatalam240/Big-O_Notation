//stack//[LIFO]last in first out//last e je push hobe sei first e out hobe//

//push
//pop
//peek

class stack {
  constructor() {
    this.items = [];
    // return items;
  }
  push(item) {
    this.items.push(item);
    // return this.items;
  }
  pop() {
    if (this.isempty()) {
      console.log("stack underflow");
    }
    this.items.pop();
    return this.items;
  }
  peek() {
    if (this.isempty()) {
      console.log("stack underflow");
    }
    // this.items.peek();
    console.log(`Top element is: ${this.items[this.items.length - 1]}`);
    return this.items[this.items.length - 1];
  }
  isempty() {
    if (this.items.length === 0) {
      return true;
    }
  }
  print() {
    console.log(this.items);
  }
}
const s1 = new stack();

s1.push(10);
s1.push(20);
s1.push(30);
s1.peek();
s1.print();
s1.pop();
s1.print();
s1.peek();

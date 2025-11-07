//stateful(object) vs stateless(function)
//   let count = 0;
const counter = (amount) => {
  let count = 0;

  count = count + amount;
  return count;
};
console.log(counter(5));
console.log(counter(3));

//object//
const obj = {
  count: 0,
  add(amount) {
    this.count = amount + this.count;
  },
  print() {
    console.log(this.count);
  },
};
obj.add(5);
obj.add(4);
obj.print();

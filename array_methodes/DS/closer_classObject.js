const counter = () => {
  let count = 0;
  return (amount) => {
    count += amount;
    return count;
  };
};
const add = counter();
console.log(add(4));
console.log(add(3));

class Counter {
  constructor() {
    this.count = 0;
  }
  add(amount) {
    this.count = this.count + amount;
    return this.count;
  }
  print() {
    console.log(this.count);
  }
}
const mycounter = new Counter();
// console.log(mycounter.add(5));
mycounter.add(5);
mycounter.add(3);
// console.log(mycounter.add(2));
mycounter.print();

const yourcounter=new Counter();
yourcounter.add(10);
yourcounter.print();


// class Counter {
//   constructor() {
//     this.count = 0;
//   }
//   sum(amount) {
//     this.count = this.count + amount;
//     return this.count;
//   }
//   print() {
//     console.log(this.count);
//   }
// }
// const counterA = new Counter();
// counterA.sum(2);
// counterA.sum(3);
// counterA.print();
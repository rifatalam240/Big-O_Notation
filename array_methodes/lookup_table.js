const products = [
  { id: "p-01", name: "Laptop", brand: "Dell", price: 800 },
  { id: "p-02", name: "Smartphone", brand: "Samsung", price: 500 },
  { id: "p-03", name: "Headphones", brand: "Sony", price: 150 },
  { id: "p-04", name: "Keyboard", brand: "Logitech", price: 70 },
  { id: "p-05", name: "Monitor", brand: "LG", price: 200 },
];

const lookuptable = products.reduce((table, item) => {
  table[item.id] = item;
    return table;
}, {});
console.log(lookuptable);
// output//
// {
//   'p-01': { id: 'p-01', name: 'Laptop', brand: 'Dell', price: 800 },
//   'p-02': { id: 'p-02', name: 'Smartphone', brand: 'Samsung', price: 500 },
//   'p-03': { id: 'p-03', name: 'Headphones', brand: 'Sony', price: 150 },
//   'p-04': { id: 'p-04', name: 'Keyboard', brand: 'Logitech', price: 70 },
//   'p-05': { id: 'p-05', name: 'Monitor', brand: 'LG', price: 200 }
// }

console.log(lookuptable["p-03"]);
// output//
// { id: 'p-03', name: 'Headphones', brand: 'Sony', price: 150 }
const product=products.find(item=>item.id==="p-05")
console.log(product);
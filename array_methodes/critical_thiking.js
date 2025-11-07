const products = [
  { category: "Fruits", item: "Apple", quantity: 10, price: 120 },
  { category: "Fruits", item: "Banana", quantity: 25, price: 60 },
  { category: "Fruits", item: "Apple", quantity: 8, price: 130 },
  { category: "Fruits", item: "Banana", quantity: 15, price: 55 },
  { category: "Vegetables", item: "Carrot", quantity: 10, price: 90 },
  { category: "Vegetables", item: "Carrot", quantity: 20, price: 85 },
  { category: "Dairy", item: "Milk", quantity: 12, price: 70 },
  { category: "Dairy", item: "Milk", quantity: 8, price: 75 },
  { category: "Snacks", item: "Chips", quantity: 30, price: 50 },
  { category: "Snacks", item: "Chips", quantity: 20, price: 55 },
];
const lookuptable = products.reduce((table, item) => {
  if (!table[item.category]) {
    table[item.category] = { totalRevenue: 0, totalQuantity: 0 };
  }
  table[item.category].totalRevenue +=   item.price * item.quantity ;
  table[item.category].totalQuantity =   item.quantity +1;
    return table;
}, {});
console.log(lookuptable);
// output//
// {
//   Fruits: { totalRevenue: 4565, totalQuantity: 58 },
//   Vegetables: { totalRevenue: 2600, totalQuantity: 30 },
//   Dairy: { totalRevenue: 1440, totalQuantity: 20 },
//   Snacks: { totalRevenue: 2600, totalQuantity: 50 }
// }

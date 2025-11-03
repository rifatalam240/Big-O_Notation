const products = [
  {
    id: 1,
    productName: "Mouse",
    price: 1200,
    category: "Electronics",
    stock: 35,
  },
  {
    id: 2,
    productName: "Headphone",
    price: 2500,
    category: "Electronics",
    stock: 20,
  },
  {
    id: 3,
    productName: "Keyboard",
    price: 3400,
    category: "Electronics",
    stock: 15,
  },
  { id: 4, productName: "Watch", price: 5000, category: "Wearable", stock: 12 },
  { id: 5, productName: "Chair", price: 7500, category: "Furniture", stock: 8 },
  {
    id: 6,
    productName: "Stand",
    price: 1800,
    category: "Accessory",
    stock: 40,
  },
  { id: 7, productName: "Bottle", price: 400, category: "Kitchen", stock: 100 },
  { id: 8, productName: "Lamp", price: 1500, category: "Office", stock: 25 },
  {
    id: 9,
    productName: "Notebook",
    price: 120,
    category: "Stationery",
    stock: 200,
  },
  { id: 10, productName: "Bag", price: 2200, category: "Travel", stock: 30 },
];

//top 3 productname ber kora//
//process
//filter by categories
//sort by price
//slice for top 2
//map transform object form

const topproducts = products
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => b.price - a.price)
  .slice(0, 2)
  .map((item) =>{
    return  {name:item.productName}});
console.log("Filtered Products:", topproducts);

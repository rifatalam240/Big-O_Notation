const numbers = [5, 3, 8, 1, 2];
const fruits = ["Banana", "apple", "orange", "Mango", "grape"];
const sort_numbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers:", sort_numbers);
// const sort_fruits = fruits.sort();  eta sudu alphabetically sort korbe
const sort_fruits = fruits.sort((a, b) => b.localeCompare(a));
console.log("Sorted Fruits:", sort_fruits);

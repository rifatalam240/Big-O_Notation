

// 4. Iteration / Loop Methods
// Method	কাজ	Example
// forEach()	প্রতিটি element এর উপর loop চলে	arr.forEach(x => console.log(x))
// map()	প্রতিটি element modify করে নতুন array দেয়	arr.map(x => x*2)
// filter()	শর্ত পূরণ করা element গুলো দেয়	arr.filter(x => x>2)
// reduce()	একাধিক element কে এক value তে reduce করে	arr.reduce((a,b)=>a+b)
// find()	প্রথম যেটা শর্ত মেলে সেটা দেয়	arr.find(x => x>2)
// findIndex()	প্রথম মেলা element এর index দেয়	arr.findIndex(x => x>2)
// some()	অন্তত ১টা element শর্ত মেনে চলে কিনা	arr.some(x => x>2)
// every()	সব element শর্ত মেনে চলে কিনা	arr.every(x => x>0)

// 📘 Example:

let arr = [1,2,3,4,5];

arr.map(x => x*2);     // [2,4,6,8,10]
arr.filter(x => x>2);  // [3,4,5]
arr.reduce((a,b)=>a+b,0); // 15
arr.find(x => x>3);    // 4
arr.some(x => x>4);    // true
arr.every(x => x>0);   // true

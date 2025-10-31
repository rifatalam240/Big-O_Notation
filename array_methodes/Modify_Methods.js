
// 🔵 3. Transform / Modify Methods
// Method	কাজ	Example
// reverse()	array উল্টে দেয়	arr.reverse()
// sort()	element sort করে (string basis এ)	arr.sort()
// splice()	add/remove করে নির্দিষ্ট জায়গায়	arr.splice(2, 1)
// slice()	নতুন array return করে (cut করে)	arr.slice(1, 3)

// 📘 Example:

let arr = [5, 3, 8, 1];
arr.sort();     // [1,3,5,8]
arr.reverse();  // [8,5,3,1]
arr.slice(1,3); // [5,3]
arr.splice(2,1); // index 2 remove

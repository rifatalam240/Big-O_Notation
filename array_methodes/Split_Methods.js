// 🟡 5. Combine / Split Methods
// Method	কাজ	Example
// concat()	দুইটা array একসাথে যুক্ত করে	[1,2].concat([3,4])
// join()	সব element কে string করে join করে	arr.join('-')
// toString()	array কে string এ রূপান্তর করে	arr.toString()

// 📘 Example:

let a = [1,2], b = [3,4];
a.concat(b); // [1,2,3,4]
a.join('-'); // "1-2"
a.toString(); // "1,2"



// 6. Advanced ES6+ Array Methods
// Method	কাজ	Example
// from()	array-like object কে array বানায়	Array.from("Rifat") → ['R','i','f','a','t']
// isArray()	চেক করে এটা array কিনা	Array.isArray(arr)
// flat()	nested array কে flatten করে	[1,[2,[3]]].flat(2) → [1,2,3]
// flatMap()	map() + flat() একসাথে কাজ করে	[1,2,3].flatMap(x=>[x,x*2])
// keys() / values() / entries()
// iterator দেয়
// for (let x of arr.keys()) {}
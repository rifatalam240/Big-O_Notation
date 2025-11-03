// ২. Map তৈরি করা
const map = new Map();
const myMap = new Map();

// ৩. মান (value) যোগ করা

map.set("name", "rifat");
map.set("age", 222);
myMap.set("name", "Rifat");
myMap.set("age", 22);
myMap.set(100, "number key");
myMap.set(true, "boolean key");

// ৪. মান (value) পাওয়া
console.log(map.get("age"));
console.log(myMap.get("name"));
console.log(myMap.get(true));

// ৫. কোনো key আছে কিনা দেখা

console.log(map.has("name"));

// ৬. কোনো মান মুছে ফেলা
myMap.delete(100);
console.log(myMap);
console.log(map);

// ৭. Map এর সাইজ দেখা
console.log(map.size);
console.log(myMap.size);

// ৭. সব কিছু মুছে ফেলা
myMap.clear();
console.log(myMap.size); // 0

// ৮. Map-এর উপর loop চালানো
const anotherMap = new Map();
anotherMap.set("a", 1);
anotherMap.set("b", 2);
anotherMap.set("c", 3);
for (const [key, value] of anotherMap) {
  console.log(`${key}: ${value}`);
}

// ৯. Map থেকে keys বা values আলাদা নেওয়া
const user = new Map();
user.set("name", "Rifat");
user.set("age", 22);
user.set("country", "Bangladesh");
console.log(user.keys()); // সব key
console.log(user.values()); // সব value
console.log(user.entries()); // [key, value] pair

// ১০. Object থেকে Map বানানো

const obj = { name: "Rifat", age: 22 };
const mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj);

// ১১. Map থেকে Object বানানো

const mapToObj = Object.fromEntries(mapFromObj);
console.log(mapToObj);

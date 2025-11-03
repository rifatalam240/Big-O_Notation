// ৮. Map-এর উপর loop চালানো

const user = new Map();
user.set("name", "Rifat");
user.set("age", 22);
user.set("country", "Bangladesh");

for (const [key, value] of user) {
  console.log(key, ":", value);
}

// শুধুমাত্র keys বের করতে

for (const key of user.keys()) {
  console.log("Key:", key);
}

// শুধুমাত্র values বের করতে

for (const value of user.values()) {
  console.log("Value:", value);
}

// ৪. key-value pair একসাথে (entries দিয়ে)
for (const [key, value] of user.entries()) {
  console.log("Entry:", key, "=", value);
}

// ৫. forEach() মেথড (আরও সহজভাবে)
myMap.forEach((value, key) => {
  console.log(key, value);
});

const arr = [1, [2, 3, [32, 73, 45, [34, 56]]], [4, [5, 6, [44, 55, [77]]]], 7];
const flatarr = arr.flat(Infinity);
console.log("Flattened Array:", flatarr);

const namelist = [
  ["rifat", "tania", "saimon"],
  ["sharif", "rifat", "imran", "tania", "sadia", "siam", "nazmul"],
  [
    "sadia",
    "shimon",
    "nazmul",
    "siam",
    "tania",
    "saimon",
    "rifat",
    "imran",
    "shimon",
    "nazmul",
  ],
];

const removeduplicate = [...new Set(namelist.flat(Infinity))];
console.log("Unique Names:", removeduplicate);

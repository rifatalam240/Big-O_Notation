// 🧍‍♂️ Users Array
const users = [
  { id: 101, name: "Rifat Alam" },
  { id: 102, name: "Sara Rahman" },
  { id: 103, name: "Imran Hossain" },
];

// 📝 Posts Array
const posts = [
  { id: 1, userId: 101, title: "My first post" },
  { id: 2, userId: 102, title: "Learning JavaScript" },
  { id: 3, userId: 101, title: "Understanding Reduce Method" },
  { id: 4, userId: 103, title: "React Hooks Explained" },
];
const postLookupTable = posts.reduce((table, post) => {
  if (!table[post.userId]) {
    table[post.userId] = [];
  }
  table[post.userId].push(post);
  return table;
}, {});
console.log(postLookupTable);
// const userLookupTable = users.reduce((table, user) => {
//   table[user.id] = user;
//   return table;
// }, {});
// console.log(userLookupTable);
const userpost = users.map((user) => {
  return { ...user, posts: postLookupTable[user.id] || [] };
});
console.log(JSON.stringify(userpost));

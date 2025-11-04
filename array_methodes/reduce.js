const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sum);
const countduplicate = [1, 2, 3, 44, 4, 3, 2, 1];
const count = countduplicate.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(count);
const players = [
  { name: "Messi", goalScore: 35 },
  { name: "Ronaldo", goalScore: 42 },
  { name: "Mbappe", goalScore: 29 },
  { name: "Neymar", goalScore: 50 },
];
const findbestscorer = players.reduce((acc, cur) => {
  if (acc.goalScore > cur.goalScore) {
    return {acc};
  }
  return cur;
}, players[0]);
console.log(findbestscorer);
const object={[findbestscorer.name]:findbestscorer.goalScore};
console.log(object);

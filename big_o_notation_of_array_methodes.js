//number-1 more than efficient from number-2//
//number-1

const starttime = performance.now();
for (let i = 0; i < 30; i++) {
  console.log(i);
}
const endtime = performance.now();
console.log(`Execution time: ${endtime - starttime} milliseconds`);

// number-2

console.time("loopTime");

for (let i = 0; i < 30; i++) {
  console.log(i);
}
console.timeEnd("loopTime");

const firstarr = [];
const secondarr = [];
for (let i = 0; i < 1000; i++) {
  if (i < 500) {
    firstarr.push(i);
  }
  secondarr.push(i);
}
console.log("firstarray length:", firstarr.length);
console.log("secondarray length:", secondarr.length);
console.time("map1Time");
const firstuserlist = firstarr.map((num) => {
  return { userid: num };
});
console.timeEnd("map1Time");
console.time("map2Time");
const seconuserlist = secondarr.map((num) => {
  return { userid: num };
});
console.timeEnd("map2Time");

console.time("find1Time");
firstuserlist.find((user) => user.userid === 400);
console.timeEnd("find1Time");
console.time("find2Time");
seconuserlist.find((user) => user.userid === 400);
console.timeEnd("find2Time");

console.time("constains1Time");
const user=firstarr[400]
console.timeEnd("constains1Time");
console.time("constains2Time");
const user2=secondarr[400]
console.timeEnd("constains2Time");



//number-1 more than efficient from number-2//
//number-1

const starttime = performance.now();
for (let i = 0; i <30; i++) {
  console.log(i);
}
const endtime = performance.now();
console.log(`Execution time: ${endtime - starttime} milliseconds`);

// number-2

console.time('loopTime');

for (let i = 0; i <30; i++) {
  console.log(i);
}
console.timeEnd('loopTime');


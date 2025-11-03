const arr = Array.from({ length: 5 }, (_, i) => i + 2);
console.log(arr);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => (2 * i + start)/ step
  );
console.log(range(2, 10, 2));
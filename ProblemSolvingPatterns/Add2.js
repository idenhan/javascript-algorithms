function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = Date.now();
addUpTo(1000000000);
let t2 = Date.now();

console.log(`Time Elapsed: ${(t2 - t1) / 10000} seconds.`);
console.log(addUpTo(1000000000));

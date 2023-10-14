function sum(...input) {
  // Start coding here !
  return input.reduce((total, current) => total + current, 0);
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`); // Result 36
console.log(`Result ${result2}`); // Result 10

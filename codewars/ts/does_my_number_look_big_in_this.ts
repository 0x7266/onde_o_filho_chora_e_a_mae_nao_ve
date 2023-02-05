console.clear();
const narcissistic = (value: number): boolean =>
  value
    .toString()
    .split("")
    // .map((n, index, arr) => Math.pow(Number(n), arr.length))
    // .reduce((a, b) => a + b) === value;
    .reduce((a, b, _, arr) => a + parseInt(b) ** arr.length, 0) === value;
console.log(narcissistic(7));
console.log(narcissistic(153));
console.log(narcissistic(1634));

console.clear();
const digitalRoot = (n: number): number => {
  let result: number = n
    .toString()
    .split("")
    .map((n) => Number(n))
    .reduce((a: number, b: number): number => a + b);
  return result >= 10 ? digitalRoot(result) : result;
};

// const digitalRoot = (n: number): number => (n - 1) % 9 + 1;

console.log(digitalRoot(456));
console.log(digitalRoot(599930962417));

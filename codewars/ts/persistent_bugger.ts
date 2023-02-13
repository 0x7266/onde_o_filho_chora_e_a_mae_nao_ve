console.clear();
function persistence(num: number): number {
  let counter: number = 0;
  while (num > 9) {
    num = Number(
      num
        .toString()
        .split("")
        .reduce((a, b) => String(Number(a) * Number(b)))
    );
    counter++;
  }
  return counter;
}

// console.log(persistence(39));
// console.log(persistence(9));
// console.log(persistence(72));
console.log(persistence(999));

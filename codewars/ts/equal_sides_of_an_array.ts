function findEvenIndex(nums: number[]): number {
  if (nums.every((n) => n === 0)) {
    return 0;
  }
  let result: number = -1;
  nums.map((n: number, index: number, arr: number[]) => {
    const left: number = arr.slice(0, index).reduce((a, b) => a + Number(b), 0);
    const right: number = arr
      .slice(index + 1)
      .reduce((a, b) => a + Number(b), 0);
    if (left === right) {
      result = index;
    }
  });
  return result;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));

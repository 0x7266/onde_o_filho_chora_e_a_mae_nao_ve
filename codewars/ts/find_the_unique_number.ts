export const findUniq = (arr: number[]): number =>
  arr.sort()[0] === arr.sort()[1] ? arr.pop()! : arr[0];

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));

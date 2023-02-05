export function dontGiveMeFive(start: number, end: number): number {
  let nums: number[] = [];
  while (start <= end) {
    nums.push(start);
    start++;
  }
  return nums.filter((n) => !n.toString().match(/5/)).length;
}

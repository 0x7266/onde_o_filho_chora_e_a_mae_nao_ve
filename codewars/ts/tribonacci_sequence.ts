export function tribonacci(arr: number[], n: number): number[] {
  for (let i = 3; arr.length < n; i++)
    arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
  return arr.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 1));

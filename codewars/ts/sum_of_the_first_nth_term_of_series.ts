export function SeriesSum(n: number): string {
  let result: number = 0;
  for (let i: number = 0; i < n; i++) {
    result += 1 / (1 + i * 3);
  }
  return result.toFixed(2);
}

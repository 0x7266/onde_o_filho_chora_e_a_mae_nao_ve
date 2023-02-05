export const findOutlier = (nums: number[]): number =>
  nums.filter((n) => n % 2 === 0).length === 1
    ? nums.filter((n) => n % 2 === 0)[0]
    : nums.filter((n) => n % 2 !== 0)[0];

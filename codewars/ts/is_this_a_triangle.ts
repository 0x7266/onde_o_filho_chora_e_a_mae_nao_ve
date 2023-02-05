export const isTriangle = (a: number, b: number, c: number): boolean =>
  a < b + c && b < a + c && c < a + b;

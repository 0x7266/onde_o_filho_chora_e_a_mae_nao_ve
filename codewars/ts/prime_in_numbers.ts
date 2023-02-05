let factors: number[] = [];

export const primeFactors = (n: number): string => {
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  console.log(factors.join(""));
  return "oi";
};

console.log(primeFactors(7775460));
console.log(primeFactors(7919));
console.log(primeFactors(17 * 17 * 93 * 677));

console.clear();
const fakeBin = (x: string): string =>
  x.replace(/\d/g, (n) => (Number(n) < 5 ? "0" : "1"));

// const fakeBin = (x:string):string => x.split("").map(n => Number(n) < 5 ? "0" : "1").join("");

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("72"));

console.clear();
const xo = (str: string): boolean =>
  str.match(/o/gi)?.length === str.match(/x/gi)?.length;
console.log(xo("xo"));
console.log(xo("xoxoo"));
console.log(xo("xoxooX"));
console.log(xo("Oo"));

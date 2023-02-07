const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export const high = (str: string): string => {
  const MAX_VALUE: string = str
    .split(" ")
    .map((w) => {
      return w
        .split("")
        .map((l) => l.replace(l, (alphabet.indexOf(l) + 1).toString()))
        .reduce((a, b) => (Number(a) + Number(b)).toString());
    })
    .sort((a, b) => Number(b) - Number(a))[0];
  const VALUES_ARR = str.split(" ").map((w) => {
    return w
      .split("")
      .map((l) => l.replace(l, (alphabet.indexOf(l) + 1).toString()))
      .reduce((a, b) => (Number(a) + Number(b)).toString());
  });
  const WORD_ARR: string[] = str.split(" ");
  //   console.log(MAX_VALUE);
  //   console.log(VALUES_ARR);
  //   console.log(WORD_ARR);
  //   console.log(VALUES_ARR.indexOf(MAX_VALUE));
  return WORD_ARR.filter(
    (a, i, arr) => arr.indexOf(a) === VALUES_ARR.indexOf(MAX_VALUE)
  )[0];
};

// export const high = (str: string): string => str.split(" ")[str.split(" ").map(w => w.split("").reduce((sum, l) => sum + l.charCodeAt(0) - 96, 0)).indexOf(Math.max(...(str.split(" ").map(w => w.split("").reduce((sum, l) => sum + l.charCodeAt(0) - 96, 0)))))]

/* 
export const high = (str: string): string => {
 const scores: number[] = str.split(' ').map(y => y.split('').reduce((sum, z) => sum + z.charCodeAt(0) - 96, 0))
 return str.split(' ')[scores.indexOf(Math.max(...scores))] 
}
*/

console.log(high("massage yes massage yes massage"));
console.log(high("aa b"));
console.log(high("take two bintang and a dance please"));
console.log(high("take me to semynak"));

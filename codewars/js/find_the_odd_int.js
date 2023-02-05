const findOdd = (xs) => {
  if (xs.length === 0) return xs[0];
  let obj = {};
  xs.map((n, index) => {
    if (!obj[n]) {
      obj[n] = 1;
    } else {
      obj[n] += 1;
    }
  });
  return Number(
    Object.entries(obj).filter((entry) => entry[1] % 2 !== 0)[0][0]
  );
};

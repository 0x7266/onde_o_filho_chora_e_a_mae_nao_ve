function processData(input) {
  let tgs = {};
  input
    .match(/<(?!\/).*?>/g)
    .sort()
    .forEach((e) => {
      e = e
        .replace(/([</>])|(=.*?["'][ >])/g, " ")
        .trim()
        .split(" ");
      if (!tgs[e[0]]) tgs[e[0]] = {};
      e.slice(1).forEach((ee) => (tgs[e[0]][ee] = ""));
    });
  for (let e in tgs)
    console.log(e + ":" + Object.keys(tgs[e]).sort().join(","));
}

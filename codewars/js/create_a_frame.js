console.clear();
const frame = (text, char) => {
  const longest = Math.max(...text.map((w) => w.length));
  let wrapped = `${char.repeat(longest + 4)}\n`;
  for (let w of text) {
    wrapped += `${char} ${w}${" ".repeat(longest - w.length)} ${char}\n`;
  }
  return (wrapped += `${char.repeat(longest + 4)}`);
};

console.log(frame(["Small", "frame"], "~"));
console.log(frame(["Create", "this", "kata"], "+"));

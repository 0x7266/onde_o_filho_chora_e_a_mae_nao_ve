console.clear();
const processData = (input) => {
  let response = "";
  const tags = [];
  const arr = input
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => line.match(/<\s*[a-z0-6]+/g))
    .flat(1)
    .filter((t) => t)
    .map((t) => t.slice(1));
  arr.map((tag) => {
    tags.push(tag);
  });
  const unique = [...new Set(tags.sort())];
  unique.map((tag) => (response += `${tag};`));
  console.log(response.slice(0, response.length - 1));
};

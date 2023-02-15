const processData = (input) =>
  input
    .trim()
    .split("\n")
    .slice(1)
    .map((line) =>
      line.match(/^(hackerrank)\b.*(?<!\bhackerrank)$/g)
        ? console.log(1)
        : line.match(/ hackerrank$/g)
        ? console.log(2)
        : line.match(/^(hackerrank)\b(.*(?<!\bhackerrank))?$/g)
        ? console.log(0)
        : console.log(-1)
    );

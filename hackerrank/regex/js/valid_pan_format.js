const processData = (input) =>
  input
    .split("\n")
    .slice(1)
    .map((line) =>
      line.match(/^[A-Z]{5}\d{4}[A-Z]+$/g)
        ? console.log("YES")
        : console.log("NO")
    );

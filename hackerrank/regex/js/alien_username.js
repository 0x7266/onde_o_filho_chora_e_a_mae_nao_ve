const processData = (input) =>
  input
    .split("\n")
    .slice(1)
    .map((line) =>
      line.match(/^[_.]\d+[a-zA-Z]*_?$/g)
        ? console.log("VALID")
        : console.log("INVALID")
    );

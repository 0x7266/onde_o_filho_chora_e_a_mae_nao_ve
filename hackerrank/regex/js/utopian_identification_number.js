const processData = (input) =>
  input
    .split("\n")
    .slice(1)
    .map((line) =>
      line.match(/^[a-z]{0,3}\d{2,8}[A-Z]{3,}$/g)
        ? console.log("VALID")
        : console.log("INVALID")
    );

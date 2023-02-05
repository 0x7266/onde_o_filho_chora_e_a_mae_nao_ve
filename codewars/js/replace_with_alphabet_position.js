const alphabetPosition = (text) =>
  text
    .toLowerCase()
    .match(/[a-z]/g)
    ?.map(
      (letter, index, arr) =>
        "abcdefghijklmnopqrstuvwxyz".split("").indexOf(letter, text.split("")) +
        1
    )
    .join(" ") || "";

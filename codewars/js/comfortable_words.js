const comfortableWord = (word) =>
  !/truetrue|falsefalse/g.test(
    word
      .split("")
      .map((l) =>
        ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"].includes(l)
      )
      .join("")
  );

//   const comfortable_word = word => /^[a-gq-tvwxz]?([h-puy][a-gq-tvwxz])*[h-puy]?$/.test(word);
// const comfortable_word = word => !/[h-puy]{2}|[^h-puy]{2}/.test(word);

console.log(comfortableWord("yams"));
console.log(comfortableWord("test"));

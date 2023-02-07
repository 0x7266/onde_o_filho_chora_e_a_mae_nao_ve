export const encryptThis = (str: string): string => {
  return str.replace(
    /\b\w(\w?)(\w*?)(\w?)\b/g,
    (word, secondLetter, middle, lastLetter) => {
      return word.charCodeAt(0) + lastLetter + middle + secondLetter;
    }
  );
};

console.log(encryptThis("A wise old owl lived in an oak"));

// `${w.charCodeAt(0).toString()}$4$3$2`

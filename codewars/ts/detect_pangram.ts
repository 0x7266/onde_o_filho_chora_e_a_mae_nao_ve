export const isPangram = (phrase: string): boolean =>
  phrase
    .toLowerCase()
    .match(/[a-z]/g)
    ?.filter(
      (letter: string, index: number, arr: string[]) =>
        arr.indexOf(letter) == index
    ).length === 26;

type morseCode = {
  ".-": string;
  "-...": string;
  "-.-.": string;
  "-..": string;
  ".": string;
  "..-.": string;
  "--.": string;
  "....": string;
  "..": string;
  ".---": string;
  "-.-": string;
  ".-..": string;
  "--": string;
  "-.": string;
  "---": string;
  ".--.": string;
  "--.-": string;
  ".-.": string;
  "...": string;
  "-": string;
  "..-": string;
  "...-": string;
  ".--": string;
  "-..-": string;
  "-.--": string;
  "--..": string;
  ".----": string;
  "..---": string;
  "...--": string;
  "....-": string;
  ".....": string;
  "-....": string;
  "--...": string;
  "---..": string;
  "----.": string;
  "-----": string;
};

const morseCode: morseCode = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

export const decodeMorse = (mc: string): string =>
  mc
    .trim()
    .replace(/\s{3}/g, "  ")
    .split(" ")
    .map((l) => morseCode[l] || " ")
    .join("");

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));

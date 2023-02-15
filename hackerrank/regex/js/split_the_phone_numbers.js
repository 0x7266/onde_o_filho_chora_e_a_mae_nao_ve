function processData(input) {
  const regex = /(\d{1,3})([\s-]?)(\d{3})\2(\d{7})/g;
  let list = ``;

  input.split("\n").map((number) => {
    if (number.length > 8) {
      let format = number.split(/[\s-]/);
      let cc, lac, n;
      cc = format[0];
      lac = format[1];
      n = format[2];
      list += `CountryCode=${cc},LocalAreaCode=${lac},Number=${n}\n`;
    }
  });
  console.log(list);
}

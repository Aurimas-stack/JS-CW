// Find highest scoring word in the string; a = 1, b = 2, etc.
function high(x) {
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const wordScores = x.split(" ").map((word) => {
    return word
      .split("")
      .map((l) => {
        return alphabet.indexOf(l) + 1;
      })
      .reduce((a, b) => a + b, 0);
  });
  return x.split(" ")[
    wordScores.findIndex(
      (n) => n === wordScores.slice().sort((a, b) => b - a)[0]
    )
  ];
}

// Validate ISBN-10, last value can be either a number or X to indicate 10
function validISBN10(isbn) {
  const pattern = /^([\d]{9}[\d|x]{1})$/i;
  if (!pattern.test(isbn)) return false;

  return (
    isbn
      .split("")
      .map((v, i) => {
        if (v === "X") {
          v = 10;
        }
        return +v * (i + 1);
      })
      .reduce((a, b) => a + b, 0) %
      11 === 0
  );
}

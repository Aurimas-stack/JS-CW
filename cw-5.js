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

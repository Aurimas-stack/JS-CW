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

// Convert seconds to human readable time
function humanReadable(seconds) {
  const time = {
    hours: (seconds / 60 / 60) >> 0,
    minutes: 0,
    seconds: 0,
  };
  if (time.hours > 0) {
    const minutes = seconds - time.hours * 3600;
    time.minutes = (minutes / 60) >> 0;
    time.seconds = minutes - ((minutes / 60) >> 0) * 60;
  }
  if (time.hours === 0) {
    time.minutes = (seconds / 60) >> 0;
    time.seconds = seconds - time.minutes * 60;
  }
  if (time.hours === 0 && time.minutes === 0) {
    time.seconds = seconds;
  }
  return `${time.hours > 9 ? time.hours : "0" + time.hours}:${
    time.minutes > 9 ? time.minutes : "0" + time.minutes
  }:${time.seconds > 9 ? time.seconds : "0" + time.seconds}`;
}

// Convert rgb value to hex value
function rgb(r, g, b){
  const minMaxValues = (v) => {
    if(v < 0) {
      return 0;
    }
    if(v > 255) {
      return 255;
    }
    return v;
  }
  return [r, g, b].map(v => {
    const value = minMaxValues(v);
    const hex = value.toString(16).toUpperCase();
    if(value === 0) {
      return hex.repeat(2)
    }
    if(value < 10) {
      return "0" + hex;
    }
    if(hex.length === 1) {
      return "0" + hex;
    }
    return hex;
  }).join("");
}


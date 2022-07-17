// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const newArr = numbers.slice(i + 1);
    for (let j = 0; j < newArr.length; j++) {
      const isEqual = numbers[i] + newArr[j] === target;
      if (isEqual && numbers[i] !== newArr[j]) {
        return [i, numbers.findIndex((num) => num == newArr[j])];
      }
      if (isEqual && numbers[i] === newArr[j]) {
        const equalIndex = newArr.findIndex((num) => num === newArr[j]);
        return [i, equalIndex + 1];
      }
    }
  }
}

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
// In effect: 89 = 8^1 + 9^2
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  const sumDigPowArray = [];
  while (a <= b) {
    const powedNumber = a
      .toString()
      .split("")
      .reduce((a, b, index) => a + Math.pow(+b, index + 1), 0);
    if (powedNumber === a) {
      sumDigPowArray.push(powedNumber);
    }
    a++;
  }
  return sumDigPowArray;
}

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const uniqueLetterArray = [];
  for (let i = 0; i < string.length; i++) {
    const characterCode = string.charCodeAt(i);
    if (
      characterCode < 65 ||
      (characterCode > 90 && characterCode < 97) ||
      characterCode > 122
    ) {
      continue;
    }
    if (!uniqueLetterArray.includes(string[i].toLowerCase())) {
      uniqueLetterArray.push(string[i].toLowerCase());
    }
  }
  return uniqueLetterArray.length === 26 ? true : false;
}

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
  const towerArray = [];
  let star = "*";
  let space = " ";
  while (nFloors > 0) {
    const floor = `${space.repeat(nFloors - 1)}${star}${space.repeat(
      nFloors - 1
    )}`;
    nFloors--;
    towerArray.push(floor);
    star = star + "**";
    space = " ";
  }
  return towerArray;
}

//If there is enough space, return 0, and if there isn't, return the number of passengers.

function enough(cap, on, wait) {
  return on + wait <= cap ? 0 : Math.abs(cap - on - wait);
}

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
var uniqueInOrder = function (iterable) {
  const uniqueArray = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      uniqueArray.push(iterable[i]);
    }
  }
  return uniqueArray;
};

// Find the smallest number in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}

// Alternate string case for letters
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((letter) => {
      const characterCode = letter.charCodeAt(letter);
      if (characterCode >= 97 && characterCode <= 122) {
        return letter.toUpperCase();
      };
      if (characterCode >= 65 && characterCode <= 90) {
        return letter.toLowerCase();
      };
      return letter;
    })
    .join("");
};

// Find missing letter in the array
function findMissingLetter(array) {
  const letter = array.find((_, i) => {
    const string = array.join("");
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) === 2) {
      return string.charCodeAt(i);
    };
  });
  return String.fromCharCode(letter.charCodeAt(letter) + 1);
}

// Descending order: Input: 42145 Output: 54421
function descendingOrder(n){
  return +n.toString().split("").sort((a, b) => +a > +b ? -1 : 1).join("");
}

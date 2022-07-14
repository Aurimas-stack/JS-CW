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

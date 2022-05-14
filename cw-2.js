// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  const splittedWordArr = word.toLowerCase().split("");
  const newArr = [];

  for (let i = 0; i < splittedWordArr.length; i++) {
    const amount = splittedWordArr.filter(
      (letter) => letter === splittedWordArr[i]
    ).length;
    if (amount === 1) {
      newArr.push("(");
    } else {
      newArr.push(")");
    }
  }
  return newArr.join("");
}

//  Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

function minMax(arr) {
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}

//   Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//   For example (Input --> Output):
//   39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//   999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//   4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let counter = 0;
  let numbRemaining = num;
  while (numbRemaining > 9) {
    numbRemaining = `${numbRemaining}`.split("").reduce((a, b) => a * +b);
    counter++;
  }

  return counter;
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  return x
    .split("")
    .map((number) => (+number >= 5 ? "1" : "0"))
    .join("");
}

// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b

function isDivideBy(number, a, b) {
  return [number / a, number / b].every((numb) => numb % 1 === 0);
}

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((base) => (base === "T" ? (base = "U") : base))
    .join("");
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let totalOff = 0;
  if (d >= 3) {
    totalOff = 20;
  }
  if (d >= 7) {
    totalOff = 50;
  }
  return d * 40 - totalOff;
}

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0;
  }

  return array
    .sort((a, b) => (a > b ? 1 : -1))
    .slice(1, -1)
    .reduce((a, b) => a + b);
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
  return (
    name[0].toUpperCase() +
    "." +
    name.substring(name.indexOf(" ") + 1)[0].toUpperCase()
  );
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.slice(str.length - ending.length) === ending ? true : false;
}

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  const averageGrade =
    [...arguments].reduce((a, b) => a + b) / [...arguments].length;
  if (averageGrade >= 90) {
    return "A";
  }

  if (averageGrade >= 80) {
    return "B";
  }

  if (averageGrade >= 70) {
    return "C";
  }

  if (averageGrade >= 60) {
    return "D";
  }

  if (averageGrade < 60) {
    return "F";
  }
}


// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  const filteredArray = arr.filter((number) => number > 0);
  return filteredArray.length === 0 ? 0 : filteredArray.reduce((a, b) => a + b)
}

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if(!input || input.length === 0) return []
  return [input.filter( number => number > 0).length, input.filter(number => number < 0).reduce((a, b) => a + (b < 0 ? b : 0))]
}

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
  return x.reduce((a, b) => a + Number(b), 0)
}

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => word.length > 0 && word[0].toUpperCase() + word.slice(1, word.length)).join(" ")
};

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']

function smash (words) {
  return words.length === 0 ? "" : words.join(" ")
};

// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

function booleanToString(b){
  return b.toString()
}

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  const sortedArray = [...numbers].sort((a, b) => a > b ? 1 : -1)[0]; 
  const index = numbers.findIndex(numb => numb === sortedArray);
  return numbers.filter((numb, i) => i !== index)
}

// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return +inputString.split(" ")[0]
 }

//  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//  Examples (Input -> Output):
//  * "String"      -> "SSttrriinngg"
//  * "Hello World" -> "HHeelllloo  WWoorrlldd"
//  * "1234!_ "     -> "11223344!!__  " 

function doubleChar(str) {
  return str.split("").map(letter => letter + letter).join("")
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
  return a.some(item => item === x)
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  return numbers[0] !== numbers[1] ? numbers[0] : numbers.filter(number => number !== numbers[0])[0]
}// numbers.reduce((a, b) => a ^ b) - only works here because it cancels out equal pairs, leaving remaining numbers

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length ; i++) {
     if(arr[i] === arr[arr.length - 1]) {
        return null;
     }  
     if(arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1];
     }
  }

  return null
  
}

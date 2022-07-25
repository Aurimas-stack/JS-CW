//How many times will you see the ball pass in front of the window (including when it's falling and bouncing?
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let amountOfBounces = 0;
  while (h > window) {
    amountOfBounces++;
    h = h * bounce;
  }
  return amountOfBounces * 2 - 1;
}

//return the middle character
function getMiddle(s) {
  return s.length % 2 === 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[s.length / 2 - 0.5];
}

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that
// checks whether the two arrays have the "same" elements, with the same multiplicities
function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }
  const squaredArray = array2.map((number) => Math.sqrt(number)).sort();
  const firstSortedArray = array1.sort();
  let lengthToCompare = 0;
  for (let i = 0; i < squaredArray.length; i++) {
    if (squaredArray[i] === firstSortedArray[i]) {
      lengthToCompare++;
    }
  }
  return firstSortedArray.length === lengthToCompare ? true : false;
}

//square every digit
function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((n) => (+n) ** 2)
    .join("");
}

// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.
function findEvenIndex(arr) {
  let firstPartSum = 0;
  let indexToReturn = null;
  for (let i = 0; i < arr.length; i++) {
    const secondPartSum = [...arr]
      .reverse()
      .slice(0, -(i + 1))
      .reduce((a, b) => a + b, 0);
    if (firstPartSum === secondPartSum) {
      indexToReturn = i;
      break;
    }
    firstPartSum = firstPartSum + arr[i];
  }

  return indexToReturn === null ? -1 : indexToReturn;
}

//Tribonnaci sequence
//As the name may already reveal, it works basically like a Fibonacci,
//but summing the last 3 (instead of 2) numbers of the sequence to generate the next

function tribonacci(signature, n) {
  const requiredArrayLength = n;
  if (n > 0) {
    signature.push(
      signature[signature.length - 1] +
        signature[signature.length - 2] +
        signature[signature.length - 3]
    );
    n--;
    tribonacci(signature, n);
  }
  return requiredArrayLength === 0
    ? []
    : signature.slice(0, requiredArrayLength);
}

//find unique number in the array
function findUniq(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[0] === sortedArray[1] ? sortedArray.pop() : sortedArray[0];
}

//Remove needless directions from the array
function dirReduc(arr) {
  const initArrLength = arr.length;
  for (let i = 0; i < arr.length; i++) {
    const removeDirection = () => arr.splice(i, 2);
    if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") {
      removeDirection();
    }
    if (arr[i] === "EAST" && arr[i + 1] === "WEST") {
      removeDirection();
    }
    if (arr[i] === "WEST" && arr[i + 1] === "EAST") {
      removeDirection();
    }
    if (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") {
      removeDirection();
    }
  }
  if (initArrLength > arr.length) {
    dirReduc(arr);
  }
  return arr;
}

//Count number of duplicate letters
function duplicateCount(text) {
  const lowerCaseText = text.toLowerCase();
  const countObj = lowerCaseText
    .split("")
    .reduce((a, b) => ((a[b] = 0), a), {});
  for (let i = 0; i < lowerCaseText.length; i++) {
    if (lowerCaseText[i] in countObj) {
      countObj[lowerCaseText[i]]++;
    }
  }
  return Object.values(countObj).filter((val) => val > 1).length;
}

//move zeros to the back
function moveZeros(arr) {
  let zeroCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCounter++;
    }
  }

  return arr
    .filter((n) => n !== 0)
    .concat(
      Array(zeroCounter)
        .fill()
        .map((v) => (v = 0))
    );
}


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

//increment the end of the string
function incrementString(strng) {
  const zerosArray = [];
  const notZerosArray = [];
  const numbers = strng.split("").filter((l) => !isNaN(+l));
  const string = strng
    .split("")
    .filter((l) => isNaN(l))
    .join("");

  if (isNaN(+strng[strng.length - 1])) {
    return strng + "1";
  }

  if (+numbers[0] !== 0) {
    return string + (+numbers.join("") + 1);
  }

  if (numbers.every((n) => +n === 0)) {
    return string + numbers.slice(0, -1).join("") + 1;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (+numbers[i] > 0) {
      notZerosArray.push(numbers[i]);
    }
    if (+numbers[i] === 0) {
      zerosArray.push(numbers[i]);
    }
  }

  const addedNumberArray = (+notZerosArray.join("") + 1).toString().split("");

  return addedNumberArray.length === numbers.length
    ? string + addedNumberArray.join("")
    : string +
        numbers.slice(0, -addedNumberArray.length).join("") +
        addedNumberArray.join("");
}

//check for valid smileys
function countSmileys(arr) {
  const validNose = ["-", "~"];
  const validEyes = [":", ";"];
  const validSmile = [")", "D"];
  const smileyArr = [];
  for (let i = 0; i < arr.length; i++) {
    const smiley = arr[i].split("");
    const withNose =
      validNose.includes(smiley[1]) &&
      validEyes.includes(smiley[0]) &&
      validSmile.includes(smiley[2]);
    const withoutNose =
      validEyes.includes(smiley[0]) && validSmile.includes(smiley[1]);
    if (smiley.length === 3 && withNose) {
      smileyArr.push(smiley.join(""));
    }
    if (smiley.length === 2 && withoutNose) {
      smileyArr.push(smiley.join(""));
    }
  }
  return smileyArr.length;
}

//return text as alphabet string position, ex: a = 1, b = 2
function alphabetPosition(text) {
  const charCodeArray = [];
  for (let i = 0; i < text.length; i++) {
    const characterCode = text.toLowerCase().charCodeAt(i);
    if (characterCode > 96 && characterCode < 123) {
      charCodeArray.push(characterCode - 96);
    }
  }
  return charCodeArray.join(" ");
}

//create likes this function
function likes(names) {
  const amountOfNames = names.length;
  const phrase = amountOfNames < 2 ? "likes this" : "like this";
  if (amountOfNames === 0) {
    return `no one ${phrase}`;
  }
  if (amountOfNames === 1) {
    return `${names[0]} ${phrase}`;
  }
  if (amountOfNames === 2) {
    return `${names[0]} and ${names[1]} ${phrase}`;
  }
  if (amountOfNames === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} ${phrase}`;
  }
  if (amountOfNames >= 4) {
    return `${names[0]}, ${names[1]} and ${
      names.slice(2).length
    } others ${phrase}`;
  }
}

//product of consecutive Fibonnaci numbers
function productFib(prod) {
  const fibStart = [0, 1];
  const productMaker = [];
  while (
    fibStart[fibStart.length - 1] * fibStart[fibStart.length - 2] <=
    prod
  ) {
    fibStart.push(
      fibStart[fibStart.length - 1] + fibStart[fibStart.length - 2]
    );
  }
  for(let i = 0; i < fibStart.length; i++) {
    if(fibStart[i] * fibStart[i + 1] === prod) {
      productMaker.push(fibStart[i], fibStart[i + 1], true);
      break;
    }
    if(fibStart[i + 1] === undefined) {
      productMaker.push(fibStart[fibStart.length - 2],  fibStart[fibStart.length - 1], false)
    }
  }
  return productMaker;
}


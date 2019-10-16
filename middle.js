// Testing Functions
// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual FUNCTION IMPLEMENTATION
const assertArraysEqual = function (actual, expected) {
  eqArrays(actual, expected)
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// Actual Function
// middle FUNCTION IMPLEMENTATION
const middle = function (argArray) {
  if (argArray.length < 3) {
    return argArray.slice(0, 0);
  }
  if (argArray.length % 2 !== 0) {
    return argArray.slice(
      (argArray.length / 2) - 0.5,
      (argArray.length / 2) - 0.5 + 1);
  }
  if (argArray.length % 2 === 0) {
    return argArray.slice(
      argArray.length / 2 - 1,
      argArray.length / 2 + 1
    );
  }
};

// Tests
assertArraysEqual(middle([0, 2, 6, 8, 10]), [6]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true
assertArraysEqual(middle([0, 78567]), []); // => true
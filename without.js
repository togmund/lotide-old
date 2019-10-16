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
// without FUNCTION IMPLEMENTATION
const without = function (argArray) {
  return argArray;
};
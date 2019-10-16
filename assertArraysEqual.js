// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

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
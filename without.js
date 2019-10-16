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
/*
Pseudo-Code
Take in two arrays
Copy each element from the first array
  if the element doesn't appear in the second array
  paste into new array
*/

const containedIn = function (value, possibleValues) {
  console.log("containedIn Called with: ", value, possibleValues);
  for (let i = 0; i < possibleValues.length; i++) {
    if (value === possibleValues[i]) {
      console.log("✅ match found: ", value);
      return true;
    }
  }
  console.log("❌ no match found: ", value);
  return false;
};

const without = function (input, remove) {
  console.log("input and array to remove: ", input, remove)
  return input.filter(function (inputElement) {
    if (!containedIn(inputElement, remove)) {
      return inputElement;
    }
  });
};


// Tests
console.log("\n");
console.log(without([0, 2, 6, 10, 10], [0, 2, 8, 10]));
console.log("\n");
console.log(without([1, 2, 3, 4, 5, 6], [1, 2, 4, 6]));
console.log("\n");
assertArraysEqual(without([0, 2, 6, 10, 10], [0, 2, 8, 10]), [6]); // => true
console.log("\n");
assertArraysEqual(without([1, 2, 3, 4, 5, 6], [1, 2, 4, 6]), [3, 5]); // => true
console.log("\n");
assertArraysEqual(without([0, 78567], [0]), [78567]); // => true
console.log("\n");
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log("\n");
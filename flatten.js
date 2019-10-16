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

const flatten = function (args) {
  let input = args;
  // console.log("input is:", input);
  return input.map(function (inputElement) {
    // console.log("inputElement is:", inputElement);
    if (Array.isArray(inputElement)) {
      inputElement.forEach(nestedElement => {
        // console.log("nestedElement is:", nestedElement);
        return nestedElement;
      })
    }
    return inputElement;
  });
};

console.log("\n");
console.log("flatten output is: ", flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => true
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

// Example Word List

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


// TESTS

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);
const strings = ["ground", "control", "to", "major", "tom"];
const ints = [1, 2, 3, 4]
console.log("first letter of string:")
assertArraysEqual(map(strings, e => e[0]), ['g', 'c', 't', 'm', 't']);
console.log("boi-ify string:")
assertArraysEqual(map(strings, e => e+' boi'), ['ground boi', 'control boi', 'to boi', 'major boi', 'tom boi']);
console.log("doubled values:")
assertArraysEqual(map(ints, e => e * 2), [2, 4, 6, 8]);
console.log("squared values:")
assertArraysEqual(map(ints, e => e * e), [1, 4, 9, 16]);
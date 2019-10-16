// TEST IMPLEMENTATION
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION IMPLEMENTATION
/*
Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
*/

const findKeyByValue = function (objectToScan, valueToFind) {
  for (let key in objectToScan) {
    if (objectToScan[key] === valueToFind) return key;
  }
};

const eqObjects = function (objectOne, objectTwo) {
  for (let key in objectOne) {
    if (!findKeyByValue(objectTwo, objectOne[key])) return false;
  }
  return true;
};


// // TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

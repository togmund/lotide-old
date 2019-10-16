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

const findKeyByValue = function (objectToScan, valueToFind) {
  for (let key in objectToScan) {
    if (Array.isArray(objectToScan[key]) && Array.isArray(valueToFind)) {
      return eqArrays(objectToScan[key], valueToFind);
    }
    if (objectToScan[key] === valueToFind) return key;
  }
};

const eqObjects = function (objectOne, objectTwo) {
  for (let key in objectOne) {
    if (!findKeyByValue(objectTwo, objectOne[key])) return false;
  }
  for (let key in objectTwo) {
    if (!findKeyByValue(objectOne, objectTwo[key])) return false;
  }
  return true;
};


// // TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
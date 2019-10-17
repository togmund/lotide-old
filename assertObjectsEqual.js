// PRE-EXISTING IMPLEMENTATION

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
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
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) return false;
  for (let key in objectOne) {
    if (!findKeyByValue(objectTwo, objectOne[key])) return false;
  }
  return true;
};

// FUNCTION IMPLEMENTATION
/*
Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
*/
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected)
    ? console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => Assertion Passed

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => Assertion Failed

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => Assertion Passed

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => Assertion Failed
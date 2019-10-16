// TEST IMPLEMENTATION
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION IMPLEMENTATION
const letterPosition = function (stringToCount) {
  const results = {};
  for (let i = 0; i < stringToCount.length; i++) {
    if (results[stringToCount[i]]) {
      results[stringToCount[i]].push(i);
    } else {
      results[stringToCount[i]] = [i];
    }
  }
  delete results[' '];
  return results;
}

// // TESTS
// letterPosition("lighthouse in the house") would return:
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }

console.log(letterPosition("lighthouse in the house"));
console.log(letterPosition("antidisestablishmentarianism"));
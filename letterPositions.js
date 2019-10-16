// TEST IMPLEMENTATION
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION IMPLEMENTATION
const letterPosition = function (stringToCount) {
  const results = {};
  for (let i = 0; i < stringToCount; i++) {
    console.log(stringToCount[i], i);
  }
  // for (const letter of stringToCount) {
  //   if (results[letter]) {
  //     results[letter]++;
  //   } else {
  //     results[letter] = 1;
  //   }
  // }
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
console.log(letterPosition("Antidisestablishmentarianism"));
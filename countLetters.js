// TEST IMPLEMENTATION
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION IMPLEMENTATION
const countLetters = function (stringToCount) {
  const results = {};
  for (const letter of stringToCount) {
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  delete results[' '];
  return results;
}

// // TESTS
// countLetters("lighthouse in the house") would return:
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

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("antidisestablishmentarienism"));
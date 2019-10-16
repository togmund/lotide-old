
// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// head FUNCTION IMPLEMENTATION
const head = function (array) {
  return array[0];
};

// TEST CODE
assertEqual(head([5, 6, 7]), 5);                                // Should return True
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");  // Should return True
assertEqual(head("seven"), "seven");                           // Should return FALSE
assertEqual(head([]), "seven");                                // Should return FALSE
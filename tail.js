
// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// head FUNCTION IMPLEMENTATION
const head = function(array) {
  return array[0];
};

// tail FUNCTION IMPLEMENTATION
const tail = function(array) {
  let output = [];
  for (let i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
};

// TEST CODE
assertEqual(head([5,6,7]), 5);                                      // Should return TRUE
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");        // Should return TRUE
assertEqual(head([]),"seven");                                      // Should return FALSE

// TEST CODE
assertEqual(tail([5, 6, 7]).toString(), [6, 7].toString());                                 // Should return TRUE
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse"].toString());   // Should return FALSE
assertEqual(tail([]),"seven");                                                              // Should return FALSE
assertEqual(tail(["single"]),["single"]);                                                    // Should return FALSE

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);                                    // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);                   // original array should still have 3 elements!
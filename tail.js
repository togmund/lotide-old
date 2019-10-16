
// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};


// tail FUNCTION IMPLEMENTATION
const tail = function (array) {
  return array.slice(1);
};

// TEST CODE
assertEqual(tail([5, 6, 7]).toString(), [6, 7].toString());                                 // Should return TRUE
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse"].toString());   // Should return FALSE
assertEqual(tail([]), "seven");                                                              // Should return FALSE
assertEqual(tail(["single"]), ["single"]);                                                    // Should return FALSE
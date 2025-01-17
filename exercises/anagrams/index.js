// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(string) {
  return string.replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}
 
module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aCharMap = makeCharMap(stringA);
//   const bCharMap = makeCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let key in aCharMap) {
//     if (aCharMap[key] !== bCharMap[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// function makeCharMap(string) {
//   const charMap = {};
//   for (let char of string.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap;
// }
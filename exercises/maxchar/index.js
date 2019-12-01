// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const characters = {};
//   let max = 0, hero = '';
//   for (let char of str) {
//     if (!characters[char]) {
//       characters[char] = 1
//     } else {
//       characters[char]++
//     }
//   };
//   for (let char in characters) {
//     if (characters[char] > max) {
//       max = characters[char]
//       hero = char;
//     }
//   }
//   return hero;
// }

function maxChar(str) {
  const characters = {};
  let max = 0, maxChar = '';
  for (let char of str) {
    characters[char] = characters[char] + 1 || 1
  };
  for (let char in characters) {
    if (characters[char] > max) {
      max = characters[char]
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

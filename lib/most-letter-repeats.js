'use strict';

module.exports = function(words) {
  let newStr = words.split('\n');
  let map = {};
  let letter;
  let maxCount = 1;
  let highest = newStr[0];

  for(let i = 0; i < newStr.length; i++) {
    map = {};

    // Evaluate below if the length of the word is less than the current
    // # of max uniques, making it automatically skipped and saving time.
    if (newStr[i].length <= maxCount) continue;

    for (let j = 0; j < newStr[i].length; j++) {

      letter = newStr[i][j];

      if (map[letter]) {
        map[letter]++;
        if (map[letter] > maxCount) {
          maxCount = map[letter];
          highest = newStr[i];
        }
      }
      else map[letter] = 1;
    }
  }
  return console.log(`The word with the most repeated letters is ${highest}`);
};

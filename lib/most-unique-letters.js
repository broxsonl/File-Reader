'use strict';

module.exports = function(words) {

  let newStr = words.split('\n');
  let map = {};
  let letter;
  let maxCount = 1;
  let highest = newStr[0];

  for (let i = 0; i < newStr.length; i++) {
    map = {};

    // Evaluate below if the length of the word is less than the current
    // # of max repeats, making it automatically skipped and saving time.
    if (newStr[i].length <= maxCount) continue;

    for (let j = 0; j < newStr[i].length; j++) {
      letter = newStr[i][j];
      if (map[letter]) continue;
      else map[letter] = true;
    }

    if (Object.keys(map).length > maxCount) {
      highest = newStr[i];
      maxCount = Object.keys(map).length;
    }
  }
  return console.log(`The word with the most unique letters is ${highest}`);
};

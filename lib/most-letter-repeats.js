'use strict';

module.exports = function(words) {
  let map = {};
  let maxCount = 1;
  let newStr = words.split('\n');
  let letter;
  let highest = newStr[0];

  for(let i = 0; i < newStr.length; i++) {
    map = {};

    if(newStr[i].length <= maxCount) continue;

    for(let j = 0; j < newStr[i].length; j++) {

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
  console.log(`The word with the most repeated letters is ${highest}`);
};

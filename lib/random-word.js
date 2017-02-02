'use strict';

module.exports = function(words) {
  let newWords = words.trim().split('\n');
  let ranNum = Math.floor((Math.random() * newWords.length) + 1);

  console.log(`The random word is...${newWords[ranNum]}`);
};

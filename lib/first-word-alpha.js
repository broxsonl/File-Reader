'use strict';

module.exports = function(words) {
  let newWords = words.split('\n').sort();

  console.log(`The first word, alphabetically, is ${newWords[1]}`);
};

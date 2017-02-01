'use strict';

module.exports = function(words) {
  let newWords = words.split('\n').sort();

  console.log(newWords[1]);
};

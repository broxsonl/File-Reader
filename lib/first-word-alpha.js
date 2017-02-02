'use strict';

module.exports = (words) => {
  let newWords = words.split('\n').sort();

  return console.log(`The first word, alphabetically, is ${newWords[1]}`);
};

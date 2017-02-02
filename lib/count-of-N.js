'use strict';

module.exports = function(words, n) {
  let newWords = words.trim().split('\n');
  let wordArray = [];
  let nCount = 0;

  newWords.forEach( str => {
    wordArray.push(str.replace(/(\r)/gm, ''));
  });

  wordArray.forEach( str => {
    if (str.length === n) nCount++;
  });

  console.log(`There are ${nCount} words of length ${n}.`);
};

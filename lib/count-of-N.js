'use strict';

module.exports = (words, n) => {

  let newWords = words.trim()
  .replace(/(\r)/gm, '')
  .split('\n');

  let nCount = 0;

  newWords.forEach( str => {
    if (str.length === n) nCount++;
  });
  return console.log(`There are ${nCount} words of length ${n}.`);
};

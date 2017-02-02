'use strict';

module.exports = function(words) {
  let newWords = words.trim().split('\n');
  let wordArray = [];

  newWords.forEach( str => {
    wordArray.push(str.replace(/(\r)/gm, ''));
  });

  let longest = wordArray.reduce( (a, b) => {
    return a.length > b.length ? a : b;
  });

  console.log(`The longest word is ${longest}`);
};

'use strict';

module.exports = function(words) {
  let newWords = words.trim()
  .replace(/(\r)/gm, '')
  .split('\n');

  let shortest = newWords.reduce( (a, b) => {
    return a.length < b.length ? a : b;
  });

  return console.log(`The shortest word is ${shortest}`);
};

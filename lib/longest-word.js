'use strict';

module.exports = (words) => {
  let newWords = words.trim()
  .replace(/(\r)/gm, '')
  .split('\n');

  let longest = newWords.reduce( (a, b) => {
    return a.length > b.length ? a : b;
  });

  return console.log(`The longest word is ${longest}`);
};

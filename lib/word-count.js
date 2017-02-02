'use strict';

module.exports = (words) => {
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === '\n') counter++;
  }
  return console.log(`The total number of words in all four files is ${counter}`);
};

'use strict';

module.exports = function(words) {
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === '\n') counter++;
  }
  console.log(counter);
};

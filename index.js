'use strict';

// Basic method to get all of the words from the texts
const getWords = require('./get-words');

// Methods to use with getWords.
const wordCount = require('./lib/word-count');
const firstWordAlpha = require('./lib/first-word-alpha');
const longestWord = require('./lib/longest-word');
const shortestWord = require('./lib/shortest-word');
const countOfN = require('./lib/count-of-n');
const mostLetterRepeats = require('./lib/most-letter-repeats');
const mostUniqueLetters = require('./lib/most-unique-letters');
const randomWord = require('./lib/random-word');

let commandOne = process.argv[2];
let commandTwo = process.argv[3];

if (commandOne === 'wordCount') getWords(wordCount);
if (commandOne === 'firstWordAlpha') getWords(firstWordAlpha);
if (commandOne === 'longestWord') getWords(longestWord);
if (commandOne === 'shortestWord') getWords(shortestWord);
if (commandOne === 'countOfN') getWords(countOfN, parseFloat(commandTwo));
if (commandOne === 'mostLetterRepeats') getWords(mostLetterRepeats);
if (commandOne === 'mostUniqueLetters') getWords(mostUniqueLetters);
if (commandOne === 'randomWord') getWords(randomWord);

if (commandOne === 'runAll') {
  if (!commandTwo) throw new Error('Must pass in second argument for n.');
  getWords(wordCount);
  getWords(firstWordAlpha);
  getWords(longestWord);
  getWords(shortestWord);
  getWords(countOfN, parseFloat(commandTwo));
  getWords(mostLetterRepeats);
  getWords(mostUniqueLetters);
  getWords(randomWord);
}

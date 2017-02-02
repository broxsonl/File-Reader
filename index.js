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

if (process.argv[2] === 'wordCount') getWords(wordCount);
if (process.argv[2] === 'firstWordAlpha') getWords(firstWordAlpha);
if (process.argv[2] === 'longestWord') getWords(longestWord);
if (process.argv[2] === 'shortestWord') getWords(shortestWord);
if (process.argv[2] === 'countOfN') getWords(countOfN, parseFloat(process.argv[3]));
if (process.argv[2] === 'mostLetterRepeats') getWords(mostLetterRepeats);
if (process.argv[2] === 'mostUniqueLetters') getWords(mostUniqueLetters);
if (process.argv[2] === 'randomWord') getWords(randomWord);

if (process.argv[2] === 'runAll') {
  getWords(wordCount);
  getWords(firstWordAlpha);
  getWords(longestWord);
  getWords(shortestWord);
  getWords(countOfN, parseFloat(process.argv[3]));
  getWords(mostLetterRepeats);
  getWords(mostUniqueLetters);
  getWords(randomWord);
}

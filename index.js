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

// let commands = []

// let command = process.argv[2]

getWords(wordCount);
getWords(firstWordAlpha);
getWords(longestWord);
getWords(shortestWord);
getWords(countOfN, 4);
getWords(mostLetterRepeats);
getWords(mostUniqueLetters);
getWords(randomWord);

'use strict';

// Basic method to get all of the words from the texts
const getWords = require('./get-words');

// Methods to use with getWords
const wordCount = require('./lib/word-count');
const firstWordAlpha = require('./lib/first-word-alpha');
const longestWord = require('./lib/longest-word');
const shortestWord = require('./lib/shortest-word');

const randomWord = require('./lib/random-word');

// getWords(wordCount);
// getWords(firstWordAlpha);
// getWords(longestWord);
// getWords(shortestWord);

// getWords(randomWord);


//Write individual modules that can be required in here and passed in to getWords via process.argv

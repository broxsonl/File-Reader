'use strict';

const getWords = require('./get-words');
const wordCount = require('./lib/word-count')

getWords(wordCount);


//Write individual modules that can be required in here and passed in to getWords via process.argv

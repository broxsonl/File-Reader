'use strict';

const Promise = require('bluebird');

const readFile = Promise.promisify(require('fs').readFile);

let allWords = '';

module.exports = function(callback) {

  readFile(`${__dirname}/words/words1.txt`, 'utf8')
    .then(data => {
      allWords += data;
    })
    .then(() => {
      readFile(`${__dirname}/words/words2.txt`, 'utf8')
        .then(data => {
          allWords += data;
        })
        .then(() => {
          readFile(`${__dirname}/words/words3.txt`, 'utf8')
            .then(data => {
              allWords += data;
            })
            .then(() => {
              readFile(`${__dirname}/words/words4.txt`, 'utf8')
                .then(data => {
                  allWords += data;
                })
                .then( () => {
                  callback(allWords);
                });
            });
        });
    });
};

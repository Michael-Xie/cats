// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  // fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
  //   // ISSUE: Returning from inner callback function, not our main function.
  //   console.log('Callback: I have the data!')
  //   if (!error) return data; 
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
      return callback(data)
  });
}

// // we try to get the return value

// const dataCallBack = (data) => {console.log("call back data:", data)};
// const bombay = breedDetailsFromFile('Bombay', dataCallBack);

module.exports = breedDetailsFromFile;
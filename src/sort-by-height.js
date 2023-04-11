const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let numbers = arr.filter(el => el !== -1);
  numbers.sort((a, b) => a - b);
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== -1) {
      arr[j] = numbers[i];
      i++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};

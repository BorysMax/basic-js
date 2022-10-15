const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    if (str === '') return '';
    if (str.length === 0) return false;
    let newStr = str;
    let char = "";
    let count = 1;
    let res = "";
    for (let i = 0; i < str.length; i++) {
        char = str[i];
        if (str[i+1] === char) {
            count++;
        } else {
            count === 1 ? res += char:res += count + char;
            count = 1;
        }
    }
    return res;
}

module.exports = {
  encodeLine
};

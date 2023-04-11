const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let repeatTimes = 1;
  let separator = '+';
  let addition = "";
  let additionRepeatTimes = 0;
  let additionSeparator = '|';
  let res = "";
  let arrayRes = [];
  array = [];

  if (str === null) str = "null";

  if (arguments.length > 1) {
    if (options.hasOwnProperty('repeatTimes')) repeatTimes = options.repeatTimes;
    if (options.hasOwnProperty('separator')) separator = options.separator;
    if (options.hasOwnProperty('addition')) addition = options.addition;
    if (options.hasOwnProperty('additionRepeatTimes')) additionRepeatTimes = options.additionRepeatTimes;
    if (options.hasOwnProperty('additionSeparator')) additionSeparator = options.additionSeparator;
    if (addition === null) addition = "null";

    if (addition !== "" && additionRepeatTimes > 1) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        arrayRes.push(addition);
      }
      res = str + arrayRes.join(additionSeparator);
    } else {
      res = str + addition;
    }
   
    for (let i = 0; i < repeatTimes; i++) {
      array.push(res);
    }
  }

  if (array.length > 1) {
    return array.join(separator);
  } else return res;
}

module.exports = {
  repeater
};

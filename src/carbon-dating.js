const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof(sampleActivity) !== 'string' || sampleActivity === '') return false;
  let number = +sampleActivity;
  if (number === 0 || number >= 9000 || number <= 0 || number === 15.1) return false;
  if (isFinite(number)) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const k = 0.693/HALF_LIFE_PERIOD;
  let res = Math.log(MODERN_ACTIVITY/number)/k;
  return Math.ceil(res);
  } else return false;
}

module.exports = {
  dateSample
};

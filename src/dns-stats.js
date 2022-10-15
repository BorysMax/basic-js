const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = {};
  let arr = [];
  let num = 0;
  for (let i = 0; i < domains.length; i++) {
      arr[i] = domains[i].split('.').reverse();
  }
  for (i = 0; i < 3; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j][i] !== undefined) {
            num++;
            switch (i) {
                case 0 : 
                    res[`.${arr[j][0]}`] = num;
                    break;
                case 1 : 
                    res[`.${arr[j][0]}.${arr[j][1]}`] = num;
                    break;
                case 2 : 
                    res[`.${arr[j][0]}.${arr[j][1]}.${arr[j][2]}`] = num;
                    break;
            }
        }    
      }
      num = 0;
  }
  return res;
}

module.exports = {
  getDNSStats
};

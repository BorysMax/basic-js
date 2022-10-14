const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let num = n;
  let res = 0;
  let bigger = 0;
  let arr = [];
  let arrServ = [];

  while (num > 0) {
      arr.unshift(num % 10);
      num = Math.floor(num/10);
  }
  
 arrServ.splice(0, arrServ.length, ...arr);   
 //console.log(arrServ.splice(0, arrServ.length, ...arr));
 for (i = 0; i < arr.length; i++) {
     arrServ.splice(i,1);
     if (res < arrServ.join("")) res = arrServ.join("");
     arrServ.splice(0, arrServ.length, ...arr)
 }
  return Number(res);
}

module.exports = {
  deleteDigit
};

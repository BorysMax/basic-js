const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!(arr instanceof Array)) throw new Error ("'arr' parameter must be an instance of the Array!");
  const action = [
  '--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev'];
  let arrRes = [];
  let i = 0;
  while (i < arr.length) {
    arrRes.push(arr[i]);
      for (let j = 0; j < action.length; j++) {
        if (arr[i] === action[0]) {
            arrRes.pop();
            if (i !== arr.length-1) i ++;
            if (arr[i+1] === action[1] || arr[i+1] === action[3]) i++;
            break;
        }
        if (arr[i] === action[1]) {
            arrRes.pop();
            if (i !== 0) arrRes.pop();
            break;
        }
        if (arr[i] === action[2]) {
            arrRes.pop();
            if (i !== arr.length-1) arrRes.push(arr[i+1]);
            break;
        }
        if (arr[i] === action[3]) {
            arrRes.pop();
            if (i !== 0) arrRes.push(arrRes[arrRes.length-1]);
            break;
        }
      }
    i++;
  }
return arrRes;
}

module.exports = {
  transform
};

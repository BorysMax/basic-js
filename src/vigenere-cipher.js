const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alphabet = this.alphabet;
    const msgUp = message.toUpperCase();
    const kUp = key.toUpperCase();
    const len = alphabet.length;

    let res = '';
    let index = 0;

    for (let i = 0; i < message.length; i++) {
    const msgChar = msgUp[i];
    const msgCharIndex = alphabet.indexOf(msgChar);

    if (msgCharIndex === -1) {
      res += msgChar;
    } else {
      const kChar = kUp[index % kUp.length];
      const kCharIndex = alphabet.indexOf(kChar);

      const encCharIndex = (msgCharIndex + kCharIndex) % len;
      const encChar = alphabet[encCharIndex];

      res += encChar;
      index++;
    }
  }
    return this.isDirect ? res : res.split('').reverse().join('');
  }

  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alphabet = this.alphabet;
    const msgUp = message.toUpperCase();
    const kUp = key.toUpperCase();
    const len = alphabet.length;

    let res = '';
    let index = 0;

    for (let i = 0; i < message.length; i++) {
      const encChar = msgUp[i];
      const encCharIndex = alphabet.indexOf(encChar);
      if (encCharIndex === -1) {
        res += encChar;
      } else {
        const kChar = kUp[index % kUp.length];
        const kCharIndex = alphabet.indexOf(kChar);
        const msgCharIndex = (encCharIndex - kCharIndex + len) % len;
        const msgChar = alphabet[msgCharIndex];
        res += msgChar;
        index++;
      }
    }
    return this.isDirect ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

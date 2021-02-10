// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function msgConverter(msg, shift) {
    let convertedMsg = '';
    const lower = 97;
    const upper = 122;

    msg.forEach((word) => {
      if (word.charCodeAt(0) < 97 || word.charCodeAt(0) > 122) {
        convertedMsg += word;
      } else {
        const charCode = word.charCodeAt(0) + shift;
        if (charCode < 97) {
          const offset = charCode - lower;
          convertedMsg += String.fromCharCode(upper + offset + 1);
        } else if (charCode > 122) {
          const offset = charCode - upper;
          convertedMsg += String.fromCharCode(lower + offset - 1);
        } else {
          convertedMsg += String.fromCharCode(charCode);
        }
      }
    });
    return convertedMsg;
  }

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const message = input.toLowerCase().split('');
    if (encode === true) {
      return msgConverter(message, shift);
    }
    return msgConverter(message, shift * -1);
  }

  return {
    caesar,
  };
}());

module.exports = caesarModule.caesar;

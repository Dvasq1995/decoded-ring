// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function createGrid() {
    const charCode = 97; // Charcode for letter 'a'
    const grid = {};
    let xVal = 1;
    let yVal = 1;

    for (let i = 0; i < 26; i += 1) {
      grid[String.fromCharCode(charCode + i)] = `${xVal}${yVal}`;
      if (String.fromCharCode(charCode + i) === 'j') {
        // Since i is already 42, just checking for j
        grid.j = '42';
      } else if (xVal === 5) {
        xVal = 1; // Reset x coordinate but increase y by 1
        yVal += 1;
      } else {
        xVal += 1;
      }
    }

    return grid;
  }

  function polybius(input, encode = true) {
    const alphabetGrid = createGrid();

    // regex to remove spaces from string; checking if length of numbers is even
    if (encode === false) {
      if (input.replace(/\s/g, '').length % 2 !== 0) {
        return false;
      }

      let decodedMsg = '';
      const msg = input.split(''); // Splitting on every character

      for (let i = 0; i < msg.length; i += 1) {
        // Turning single spaces into double spaces
        if (msg[i] === ' ') {
          msg[i] += ' ';
        }
      }
      const message = msg.join(''); // Turned into string again to iterate
      const chunks = [];

      for (let i = 0, charsLength = message.length; i < charsLength; i += 2) {
        chunks.push(message.substring(i, i + 2)); // Each value will be a sequence of two numbers
      }

      chunks.forEach((sequence) => {
        if (sequence === '  ') {
          decodedMsg += ' '; // If a double space is encountered, only add a single space
        } else if (sequence === '42') {
          decodedMsg += '(i/j)';
        } else {
          const keys = Object.keys(alphabetGrid);

          keys.forEach((key) => {
            if (alphabetGrid[key] === sequence) {
              decodedMsg += key;
            }
          });
        }
      });
      return decodedMsg;
    }

    const message = input.toLowerCase().split('');
    let encodedMsg = '';

    message.forEach((letter) => {
      if (letter === ' ') {
        encodedMsg += ' ';
      } else {
        encodedMsg += alphabetGrid[letter];
      }
    });

    return encodedMsg;
  }

  return {
    polybius,
  };
}());

module.exports = polybiusModule.polybius;

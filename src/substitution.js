// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function createSubstitution(characterSet) {
    const matches = {};
    // Creates two arrays from alphabet string and characterSet string
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    const substitutionSet = [...characterSet];

    /* Creating a property for each letter in matches object
    and assigning the value for each property from the corresponding index in characterSet */
    alphabet.forEach((letter, index) => {
      matches[letter] = substitutionSet[index];
    });

    // Ex: a: x, b: ?
    return matches;
  }

  function substitution(input, alphabet, encode = true) {
    /* Checks for alphabet argument, alphabet having 26 characters
     and uses a regex to check for alphabet argument having unique characters */
    if (alphabet === undefined || alphabet.length !== 26 || /(.).*\1/.test(alphabet) === true) {
      return false;
    }

    const substitutes = createSubstitution(alphabet);
    if (encode === true) {
      const message = input.toLowerCase().split('');
      let encodedMsg = '';

      message.forEach((character) => {
        // Checks whether the current character is a space or substitutes[' ']
        if (character === ' ') {
          encodedMsg += ' ';
        } else if (substitutes[character]) {
          encodedMsg += substitutes[character];
        }
      });
      return encodedMsg;
    }

    const alphabetKeys = Object.keys(substitutes);
    const message = input.toLowerCase().split('');
    let decodedMsg = '';

    message.forEach((character) => {
      if (character === ' ') {
        decodedMsg += ' ';
      }
      alphabetKeys.forEach((letter) => {
        if (substitutes[letter] === character) {
          decodedMsg += letter;
        }
      });
    });
    return decodedMsg;
  }

  return {
    substitution,
  };
}());

module.exports = substitutionModule.substitution;

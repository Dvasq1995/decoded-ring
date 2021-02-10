const { expect } = require('chai');
const substitutionModule = require('../src/substitution');

describe('substitutionModule', () => {
  it('It returns false if the substitution alphabet is missing', () => {
    const actual = substitutionModule('thinkful');
    expect(actual).to.be.false;
  });
  it('It returns false if the given alphabet is not exactly 26 characters long', () => {
    const actual = substitutionModule('thinkful', 'short');
    expect(actual).to.be.false;
  });
  it('It returns false if there are any duplicate characters in the given alphabet', () => {
    const actual = substitutionModule('thinkful', 'abcabcabcabcabcabcabcabcyz');
    expect(actual).to.be.false;
  });
  it('It correctly translates the given phrase, based on the alphabet given to the function', () => {
    const actual1 = substitutionModule('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    expect(actual1).to.equal('jrufscpw');
  });
  it('It maintains spaces in the message, before and after encoding or decoding', () => {
    const actual1 = substitutionModule('you are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');
    const actual2 = substitutionModule('elp xhm xf mbymwwmfj dne', 'xoyqmcgrukswaflnthdjpzibev', false);
    expect(actual1).to.equal('elp xhm xf mbymwwmfj dne');
    expect(actual2).to.equal('you are an excellent spy');
  });
  it('It ignores capital letters.', () => {
    const actual1 = substitutionModule('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    const actual2 = substitutionModule('THINKFUL', 'xoyqmcgrukswaflnthdjpzibev');
    expect(actual1).to.equal('jrufscpw');
    expect(actual2).to.equal('jrufscpw');
  });
});

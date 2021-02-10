const { expect } = require('chai');
const polybiusModule = require('../src/polybius');

describe('polybiusModule', () => {
  it('It translates the letters i and j to 42', () => {
    const actual1 = polybiusModule('i', true);
    const actual2 = polybiusModule('j', true);
    expect(actual1).to.equal('42');
    expect(actual2).to.equal('42');
  });
  it('It translates 42 to (i/j)', () => {
    const actual = polybiusModule('42', false);
    expect(actual).to.equal('(i/j)');
  });
  it('It ignores capital letters', () => {
    const actual1 = polybiusModule('message', true);
    const actual2 = polybiusModule('MESSAGE', true);
    expect(actual1).to.equal('23513434112251');
    expect(actual2).to.equal('23513434112251');
  });
  it('It maintains spaces in the message, before and after encoding or decoding.', () => {
    const actual1 = polybiusModule('3251131343 2543241341', false);
    const actual2 = polybiusModule('hello world', true);
    expect(actual1).to.equal('hello world');
    expect(actual2).to.equal('3251131343 2543241341');
  });
  it('It returns false if the number of characters (exclusing spaces) is not even', () => {
    const actual = polybiusModule('1', false);
    expect(actual).to.be.false;
  });
  it('It checks whether the function exists', () => {
    expect(polybiusModule).to.exist;
  });
});

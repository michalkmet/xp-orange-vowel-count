const vowelCount = require('./vowel-count');

describe('hello', () => {
  it('should return hello', () => {
    expect(vowelCount()).toBe('hello');
  });
});

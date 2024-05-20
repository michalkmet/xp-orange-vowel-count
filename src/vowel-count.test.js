const vowelCount = require('./vowel-count');

describe('User Story 1: vowels count', () => {
  it("UAT1.1 When I pass 'a' then I should see 1", () => {
    expect(vowelCount('a')).toBe(1);
  });
});

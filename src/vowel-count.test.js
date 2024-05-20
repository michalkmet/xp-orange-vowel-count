const vowelCount = require('./vowel-count');

describe('User Story 1: vowels count', () => {
  it("UAT1.1 When I pass 'a' then I should see 1", () => {
    expect(vowelCount('a')).toBe(1);
  });
  it("UAT1.2 When I pass 'e' then I should see 1", () => {
    expect(vowelCount('e')).toBe(1);
  });
  it("UAT1.3 When I pass 'ae' then I should see 2", () => {
    expect(vowelCount('ae')).toBe(2);
  });
  it("UAT1.4 When I pass 'ab' then I should see 1", () => {
    expect(vowelCount('ab')).toBe(1);
  });
  it("UAT1.5 When I pass 'ce' then I should see 1", () => {
    expect(vowelCount('ce')).toBe(1);
  });
  it("UAT1.6 When I pass 'oc' then I should see 1", () => {
    expect(vowelCount('oc')).toBe(1);
  });
  it("UAT1.7 When I pass 'i' then I should see 1", () => {
    expect(vowelCount('i')).toBe(1);
  });
  it("UAT1.8 When I pass 'g' then I should see 0", () => {
    expect(vowelCount('g')).toBe(0);
  });
  it("UAT1.9 When I pass ' ' then I should see 0", () => {
    expect(vowelCount(' ')).toBe(0);
  });
  it("UAT1.10 When I pass ' r' then I should see 0", () => {
    expect(vowelCount(' r')).toBe(0);
  });
  it("UAT1.11 When I pass 'u o ' then I should see 2", () => {
    expect(vowelCount('u o ')).toBe(2);
  });
  it("UAT1.12 When I pass 'bubory' then I should see 2", () => {
    expect(vowelCount('bubory')).toBe(2);
  });
});

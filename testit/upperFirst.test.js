import upperFirst from "../src/upperFirst";

/**
 * Tests for `upperFirst` function which should capitalize the first character of a string.
 */
describe('upperFirst', () => {
  it('should capitalize the first character of a string', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
  });
});

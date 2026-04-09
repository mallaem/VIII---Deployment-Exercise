import toString from "../src/toString";


/**
 * Tests for `toString` function which should convert various types of values
 * to their string representation.
 */
describe('toString', () => {
  it('should convert null to an empty string', () => {
    expect(toString(null)).toBe('');
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).toBe('-0');
  });

  it('should convert arrays to strings', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });
});

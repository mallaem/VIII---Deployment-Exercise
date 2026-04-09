import isDate from "../src/isDate";

/**
 * Tests for `isDate` function which should identify Date objects.
 */
describe('isDate', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('should return false for non-Date values', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(123)).toBe(false);
  });
});


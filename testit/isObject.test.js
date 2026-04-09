import isObject from '../src/isObject.js';

/**
 * Tests for `isObject` function which should determine if a value is an object.
 */
describe('isObject', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(() => {})).toBe(true);
    expect(isObject(new Number(0))).toBe(true);
    expect(isObject(new String(''))).toBe(true);
  });

  it('should return false for non-objects', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(42)).toBe(false);
    expect(isObject('Hello')).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});

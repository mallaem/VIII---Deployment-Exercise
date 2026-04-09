import ceil from "../src/ceil";

/**
 * Tests for `ceil` function which should round a number up to the nearest integer or to the specified precision.
 */
describe('ceil', () => {
  it('should round up a number to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
  });

  it('should round up a number to the specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  it('should round up a number to the specified negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  it('should return the same number if it is already an integer', () => {
    expect(ceil(5)).toBe(5);
  });

  it('should return the same number if it is already at the specified precision', () => {
    expect(ceil(6.01, 2)).toBe(6.01);
  });
});

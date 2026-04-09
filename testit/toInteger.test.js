import toInteger from "../src/toInteger";

/**
 * Tests for `toInteger` function which should convert values to integers.
 */
describe("toInteger", () => {
  it("should convert floating values to integers", () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger(-3.2)).toBe(-3);
  });

  it("should convert string values to integers", () => {
    expect(toInteger("3.2")).toBe(3);
    expect(toInteger("-3.2")).toBe(-3);
  });

  it("should convert non-finite values to integers", () => {
    expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
    expect(toInteger(-Infinity)).toBe(-Number.MAX_VALUE);
    expect(toInteger(NaN)).toBe(0);
  });

  it("should convert very small values to integers", () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });
});


import toNumber from "../src/toNumber";

/**
 *  Testing the `toNumber` function to ensure it correctly converts values to numbers.
 */
describe("toNumber", () => {
  it("should convert a string to a number", () => {
    expect(toNumber("3.2")).toBe(3.2);
  });

  it("should return NaN for non-numeric strings", () => {
    expect(toNumber("abc")).toBeNaN();
  });

  it("should return the number if the input is already a number", () => {
    expect(toNumber(5)).toBe(5);
  });

  it("should handle leading and trailing whitespace", () => {
    expect(toNumber("  42  ")).toBe(42);
  });

  it("should return NaN for symbols", () => {
    expect(toNumber(Symbol("test"))).toBeNaN();
  });
});
import endsWith from "../src/endsWith";

/**
 * Tests for `endsWith` function.
 */
describe("endsWith", () => {
  it("should return true if the string ends with the specified suffix", () => {
    expect(endsWith("hello", "lo")).toBe(true);
  });

  it("should return false if the string does not end with the specified suffix", () => {
    expect(endsWith("hello", "world")).toBe(false);
  });

  it("should return true if the string is the same as the suffix", () => {
    expect(endsWith("hello", "hello")).toBe(true);
  });

  it("should return false if the string is shorter than the suffix", () => {
    expect(endsWith("hi", "hello")).toBe(false);
  });
});

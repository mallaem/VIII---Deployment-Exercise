import eq from "../src/eq";

/**
 * Tests for `eq` function which should determine if two values are equal.
 */
describe("eq", () => {
  it("should return `true` for identical values", () => {
    const object = { a: 1 };
    expect(eq(object, object)).toBe(true);
    expect(eq("a", "a")).toBe(true);
    expect(eq(NaN, NaN)).toBe(true);
  });

  it("should return `false` for different values", () => {
    const object = { a: 1 };
    const other = { a: 1 };
    expect(eq(object, other)).toBe(false);
    expect(eq("a", Object("a"))).toBe(false);
  });
});

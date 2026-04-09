import every from "../src/every";

/**
 * Tests for `every` function.
 */
describe("every", () => {
  it("should return `true` if all elements pass the predicate check", () => {
    const array = [true, 1, "yes"];
    expect(every(array, Boolean)).toBe(true);
  });

  it("should return `false` if any element fails the predicate check", () => {
    const array = [true, 1, null, "yes"];
    expect(every(array, Boolean)).toBe(false);
  });

  it("should return `true` for empty arrays", () => {
    expect(every([], Boolean)).toBe(true);
  });
});
import difference from "../src/difference";

/**
 * Tests for `difference` function.
 */
describe("difference", () => {
  it("should return the difference of two arrays", () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  it("should return an empty array if the first array is empty", () => {
    expect(difference([], [1, 2])).toEqual([]);
  });

  it("should return an empty array if there are no values to exclude", () => {
    expect(difference([1, 2], [])).toEqual([1, 2]);
  });

  it("should return an empty array if all values are excluded", () => {
    expect(difference([1, 2], [1, 2])).toEqual([]);
  });
});
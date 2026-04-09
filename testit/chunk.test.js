import chunk from "../src/chunk";

/**
 * Tests for `chunk` function which should split an array into groups the length of `size`.
 */
describe("chunk", () => {
  it("should split an array into groups the length of `size`", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });

  it("should return an empty array if `array` is nullish", () => {
    expect(chunk(null, 3)).toEqual([]);
    expect(chunk(undefined, 3)).toEqual([]);
  });

});

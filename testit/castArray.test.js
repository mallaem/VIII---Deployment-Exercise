import castArray  from "../src/castArray";

/** * Tests for `castArray` function which should cast a value as an array if it's not one.
 */
describe("castArray", () => {
  it("should cast non-array values to arrays", () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
  });

  it("should return an empty array if no arguments are provided", () => {
    expect(castArray()).toEqual([]);
  });

  it("should return the same array if an array is provided", () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });
});

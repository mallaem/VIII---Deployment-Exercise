import get from "../src/get";

/**
 * Tests for `get` function.
 */
describe("get", () => {
  const object = { a: [{ b: { c: 3 } }] };

  it("should return the resolved value", () => {
    expect(get(object, "a[0].b.c")).toBe(3);
    expect(get(object, ["a", "0", "b", "c"])).toBe(3);
  });

  it("should return the default value for `undefined` resolved values", () => {
    expect(get(object, "a.b.c", "default")).toBe("default");
  });
});
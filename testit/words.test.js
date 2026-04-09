import words from "../src/words";

describe("words", () => {
  it("should split a string into words", () => {
    expect(words("fred, barney, & pebbles")).toEqual(["fred", "barney", "pebbles"]);
  });

  it("should match words based on a pattern", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).toEqual(["fred", "barney", "&", "pebbles"]);
  });
});
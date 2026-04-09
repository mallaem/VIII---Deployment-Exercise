import camelCase from "../src/camelCase";

/**
 *  Testing the `camelCase` function to ensure it correctly converts various string formats into camel case.
 */
describe('camelCase', () => {
  it('should convert a string to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar')
    expect(camelCase('--foo-bar--')).toBe('fooBar')
    expect(camelCase('__FOO_BAR__')).toBe('fooBar')
  })
})

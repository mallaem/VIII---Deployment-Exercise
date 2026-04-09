import capitalize from "../src/capitalize";

/**
 * Testing the `capitalize` function to ensure it correctly converts the first character of a string to upper case and the remaining characters to lower case.
 */

describe('capitalize', () => {
    it('should capitalize the first character of a string and convert the rest to lower case', () => {
        expect(capitalize('FRED')).toBe('Fred')
        expect(capitalize('hello world')).toBe('Hello world')
        expect(capitalize('javaScript')).toBe('Javascript')
        expect(capitalize('123abc')).toBe('123abc')
        expect(capitalize('')).toBe('')
    })
})


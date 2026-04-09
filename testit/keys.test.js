import keys from '../src/keys.js'

/** Testing the `keys` function to ensure it correctly retrieves
 *  the keys from an object.
 */
describe('keys', () => {
  it('should return the keys of an object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(keys(obj)).toEqual(['a', 'b', 'c'])
  })

  it('should return an empty array for an empty object', () => {
    expect(keys({})).toEqual([])
  })
});
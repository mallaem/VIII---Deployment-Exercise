import add from '../src/add.js'

/**
 *  Testing the basic functionality of the `add` function,
 *  ensuring it correctly adds two numbers together.
 */
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(6, 4)).toBe(10)
    expect(add(-2, 3)).toBe(1)
    expect(add(0, 0)).toBe(0)
  })
})


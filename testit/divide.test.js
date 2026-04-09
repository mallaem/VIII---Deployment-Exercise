import divide from "../src/divide";

/**
 * Tests for the divide function. 
 */

describe('divide', () => {
  it('should divide two numbers correctly', () => {
    expect(divide(6, 4)).toBe(1.5)
  })

  it('should handle integer division', () => {
    expect(divide(10, 2)).toBe(5)
  })

  it('should handle division by 1', () => {
    expect(divide(7, 1)).toBe(7)
  })

  it('should handle zero dividend', () => {
    expect(divide(0, 5)).toBe(0)
  })
})
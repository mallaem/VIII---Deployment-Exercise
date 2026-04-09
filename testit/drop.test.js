import drop from "../src/drop";

describe('drop', () => {
  it('should drop the first element of an array', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3])
  })

  it('should drop the first n elements of an array', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3])
  })

  it('should return an empty array if n is greater than the length of the array', () => {
    expect(drop([1, 2, 3], 5)).toEqual([])
  })

  it('should return the original array if n is 0', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3])
  })
});
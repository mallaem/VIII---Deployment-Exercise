import at from '../src/at.js';

/**
 * Testing the `at` function to verify that it correctly retrieves
 * values from an object based on specified paths.
 */

describe('at', () => {
  it('should return the values at the specified paths of an object', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
    expect(at(object, 'a[0].b.c')).toEqual([3]);
    expect(at(object, 'a[1]')).toEqual([4]);
    expect(at(object, 'a[2]')).toEqual([undefined]);
  });
});


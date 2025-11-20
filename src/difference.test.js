import difference from './difference.js';

describe('difference', () => {
  test('difference with numbers', () => {
    expect(difference([1, 2, 3], [5, 2])).toEqual([1, 3]);
    expect(difference([1, 2, 3, 4, 5, 6], [5, 2])).toEqual([1, 3, 4, 6]);
    expect(difference([1, 2, 3], [5, 2, 4, 7, 8, 9])).toEqual([1, 3]);
  });
  test('test with same values on both arrays', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });
  test('test with completely values on the arrays', () => {
    expect(difference([1, 2, 3], [4])).toEqual([1, 2, 3]);
  });
  test('test with empty excluded values', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
  });
  test('test with empty inspected array', () => {
    expect(difference([], [1, 2])).toEqual([]);
  });
  test('test with different types', () => {
    expect(difference([1, 'a', false], [1])).toEqual(['a', false]);
  });
});

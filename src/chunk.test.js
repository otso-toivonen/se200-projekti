import chunk from './chunk.js';

describe('chunk', () => {

  test('array divisible by even number splits evenly', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('array divisible by odd number splits evenly', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
          .toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  test('array not divisble by odd number splits unevenly', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test('array not divisible by even number splits unevenly', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))
          .toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  test('empty array cannot be split', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  test('array with length equal to chunksize returns array as chunk', () => {
    expect(chunk([1,2,3], 3)).toEqual([[1,2,3]]);
  });

  test('array with length less than chunksize returns array as chunk', () => {
    expect(chunk([1,2,3], 5)).toEqual([[1,2,3]]);
  });

  test('chunksize 1 splits into arrays of length 1', () => {
    expect(chunk([1,2,3], 1)).toEqual([[1], [2], [3]]);
  });

  test('default chunksize is 1', () => {
    expect(chunk([1,2,3])).toEqual([[1], [2], [3]]);
  });

  test('chunksize 0 returns empty array', () => {
    expect(chunk([1,2,3], 0)).toEqual([]);
  });

  test('negative chunksize returns empty array', () => {
    expect(chunk([1,2,3], -1)).toEqual([]);
  });

  test('chunksize 2.7 rounds to 3', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2.7))
          .toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  test('chunksize 2.2 rounds to 2', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2.2))
          .toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  test('null array returns empty array', () => {
    expect(chunk(null, 2)).toEqual([]);
  });

  test('undefined array returns empty array', () => {
    expect(chunk(undefined, 2)).toEqual([]);
  });

});


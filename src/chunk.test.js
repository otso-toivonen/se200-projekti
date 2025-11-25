import chunk from './chunk.js';

describe('chunk', () => {

  test('array divisible by even number splits evenly', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toBe([['a', 'b'], ['c', 'd']]);
  });

  test('array divisible by odd number splits evenly', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
          .toBe([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  test('array not divisble by odd number splits unevenly', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toBe([['a', 'b', 'c'], ['d']]);
  });

  test('array not divisible by even number splits unevenly', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))
          .toBe([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  test('empty array cannot be split', () => {
    expect(chunk([], 3)).toBe([]);
  });

  test('array with length equal to chunksize returns array as chunk', () => {
    expect(chunk([1,2,3]), 3).toBe([[1,2,3]]);
  });

  test('array with length less than chunksize returns array as chunk', () => {
    expect(chunk([1,2,3]), 5).toBe([[1,2,3]]);
  });

  test('chunksize 1 splits into arrays of length 1', () => {
    expect(chunk([1,2,3], 1)).toBe([[1], [2], [3]]);
  });

  test('default chunksize is 1', () => {
    expect(chunk([1,2,3])).toBe([[1], [2], [3]]);
  });

  test('chunksize 0 returns empty array', () => {
    expect(chunk([1,2,3], 0)).toBe([]);
  });

  test('negative chunksize returns empty array', () => {
    expect(chunk([1,2,3], -1)).toBe([]);
  });

  test('chunksize 2.7 rounds to 3', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2.7))
          .toBe([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  test('chunksize 2.2 rounds to 2', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2.7))
          .toBe([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

});


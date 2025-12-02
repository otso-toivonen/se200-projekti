import filter from './filter.js';
import { jest } from '@jest/globals';
describe('filter', () => {
  test('filters values based on predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];

    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ user: 'barney', active: true }]);
  });

  test('returns an empty array when no values match', () => {
    const arr = [1, 2, 3];
    const result = filter(arr, (n) => n > 10);
    expect(result).toEqual([]);
  });

  test('handles empty arrays', () => {
    expect(filter([], () => true)).toEqual([]);
  });

  test('returns empty array when array is null or undefined', () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
  });

  test('passes correct arguments to predicate', () => {
    const arr = ['a'];
    const predicate = jest.fn().mockReturnValue(true);

    filter(arr, predicate);

    expect(predicate).toHaveBeenCalledWith('a', 0, arr);
  });

  test('filters numbers correctly', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = filter(arr, (n) => n % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  test('throws if predicate is not a function', () => {
    expect(() => filter([1, 2, 3], null)).toThrow();
    expect(() => filter([1, 2, 3], 'not a function')).toThrow();
  });
});

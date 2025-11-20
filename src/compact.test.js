import compact from './compact.js';

describe('compact', () => {
  test('test with 0 and false', () => {
    expect(compact([0, 1, false])).toEqual([1]);
  });
  test('test with empty string', () => {
    expect(compact([1, 2, ''])).toEqual([1, 2]);
  });
  test('test with null and NaN', () => {
    expect(compact([1, 2, 3, null, NaN, 0])).toEqual([1, 2, 3]);
  });
  test('test with undefined', () => {
    expect(compact([undefined, 9])).toEqual([9]);
  });
  test('test with only excluded values', () => {
    expect(compact([undefined, '', null])).toEqual([]);
  });
  test('test with only values that should be included', () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

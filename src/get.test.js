import get from './get.js';

describe('get', () => {

  test('gets property with array path', () => {
    const obj = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('gets property with string path', () => {
    const obj = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(obj, 'a[0].b.c')).toBe(3);
  });

  test('path does not exist with default provided returns default', () => {
    const obj = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(obj, 'a[0].b.d', 401 )).toBe(401);
  });

  test('non-existent path with default not provided, returns undefined', () => {
    const obj = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(obj, 'a[0].b.d')).toBe(undefined);
  });

  test('null array returns default', () => {
    expect(get(null, 'a.b.c', 401)).toBe(401);
  });

  test('undefined array returns default', () => {
    expect(get(undefined, 'a.b.c', 401)).toBe(401);
  });

});

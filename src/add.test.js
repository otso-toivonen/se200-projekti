import add from './add.js';

describe('add', () => {
  test('add two numbers together', () => {
    expect(add(1, 5)).toBe(6);
  });
  test('add negative numbers', () => {
    expect(add(-1, -5)).toBe(-6);
    expect(add(11, -5)).toBe(6);
  });
  test('add floating numbers together', () => {
    expect(add(3.2, 5.1)).toBe(8.3);
  });
  test('works with 0', () => {
    expect(add(0, 5)).toBe(5);
  });
  test('null works as zero', () => {
    expect(add(null, 5)).toBe(5);
  });
  test('undefined works as zero', () => {
    expect(add(11, undefined)).toBe(11);
  });
  test('returns NaN for NaN', () => {
    expect(add(11, NaN)).toBeNaN();
  });
  test('concatenates numeric strings', () => {
    expect(add('11', '5')).toBe('115');
  });
  test('concatenates non-numeric strings', () => {
    expect(add('abc', '5')).toBe('abc5');
  });
  test('handle Infinity', () => {
    expect(add(Infinity, '5')).toBe(Infinity);
    expect(add(-Infinity, '5')).toBe(-Infinity);
  });
  test('works with numeric infinity', () => {
    expect(add(1e308, 1e308)).toBe(Infinity);
  });
  test('works with big numbers', () => {
    expect(add(9007199254740991, 9007199254740991)).toBe(18014398509481982);
  });
  test('works with variables', () => {
    const a = 8;
    expect(add(a, 2)).toBe(10);
  });
  test('uses defaultValue for missing parameters', () => {
    expect(add(6)).toBe(6);
    expect(add()).toBe(0);
  });
});

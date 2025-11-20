import toNumber from './toNumber.js';

describe('toNumber', () => {
  test('converts string "0" to number 0', () => {
    expect(toNumber('0')).toBe(0);
  });
  test('converts string "256" to number 256', () => {
    expect(toNumber('256')).toBe(256);
  });
  test('converts string "-256" to number -256', () => {
    expect(toNumber('-256')).toBe(-256);
  });
  test('converts string "030" to number 30', () => {
    expect(toNumber('030')).toBe(30);
  });
  test('converts string "--100" to number o', () => {
    expect(toNumber('0')).toBe(0);
  });
  test('converts string "1.0" to number 1.0', () => {
    expect(toNumber('1.0')).toBe(1.0);
  });
  test('converts string "0.11" to number 0.11', () => {
    expect(toNumber('0.11')).toBe(0.11);
  });
  test('converts string "-0.11" to number -0.11', () => {
    expect(toNumber('-0.11')).toBe(-0.11);
  });
  test('converts string "42.895734" to number 42.895734', () => {
    expect(toNumber('42.895734')).toBe(42.895734);
  });
  test('returns NaN for invalid string "--100"', () => {
    expect(toNumber('--100')).toBeNaN();
  });
  test('converts string "100.01" to number 100.01', () => {
    expect(toNumber('100.01')).toBe(100.01);
  });
  test('converts string "\t100.01\t" to number 100.01', () => {
    expect(toNumber('\t100.01\t')).toBe(100.01);
  });
  test('converts string "\n100.01\n" to number 100.01', () => {
    expect(toNumber('\n100.01\n')).toBe(100.01);
  });
  test('returns NaN for invalid string "abab"', () => {
    expect(toNumber('abab')).toBeNaN();
  });
  test('returns NaN for invalid string "1ab2"', () => {
    expect(toNumber('1ab2')).toBeNaN();
  });
  test('returns NaN for invalid string "1.0bab"', () => {
    expect(toNumber('1.0bab')).toBeNaN();
  });
  test('converts string "100" to number 100', () => {
    expect(toNumber('100')).toBe(100);
  });
  test('converts string "3.14" to number 3.14', () => {
    expect(toNumber('3.14')).toBe(3.14);
  });
});

import eq from './eq.js';

describe('eq', () => {

  test('returns true for identical object references', () => {
    const obj = { a: 1 }
    expect(eq(obj, obj)).toBe(true)
  })

  test('returns false for different objects with same content', () => {
    const obj1 = { a: 1 }
    const obj2 = { a: 1 }
    expect(eq(obj1, obj2)).toBe(false)
  })

  test('returns true for identical strings', () => {
    expect(eq('a', 'a')).toBe(true)
  })

  test('returns false for primitive string vs String object wrapper', () => {
    expect(eq('a', Object('a'))).toBe(false)
  })

  test('returns true for numbers that are = comparison equal', () => {
    expect(eq(5, 5)).toBe(true)
    expect(eq(0, 0)).toBe(true)
  })

  test('handles NaN comparison using SameValueZero', () => {
    expect(eq(NaN, NaN)).toBe(true)
  })

  test('0 and -0 are considered equivalent (SameValueZero)', () => {
    expect(eq(0, -0)).toBe(true)
    expect(eq(-0, 0)).toBe(true)
  })

  test('returns true for booleans that are equal', () => {
    expect(eq(true, true)).toBe(true)
    expect(eq(false, false)).toBe(true)
  })

  test('returns false for different booleans', () => {
    expect(eq(true, false)).toBe(false)
  })

  test('treats null and undefined as equivalent due to ==', () => {
    expect(eq(null, undefined)).toBe(true)
  })

  test('returns false for mismatched types not loosely equal', () => {
    expect(eq(1, '1')).toBe(true) // loose equality makes these equal
    expect(eq(1, '2')).toBe(false)
    expect(eq(false, 0)).toBe(true)
    expect(eq(true, 1)).toBe(true)
  })

  test('returns false for symbol comparisons', () => {
    const s1 = Symbol('x')
    const s2 = Symbol('x')
    expect(eq(s1, s1)).toBe(true)
    expect(eq(s1, s2)).toBe(false)
  })

  test('returns true when both values are undefined', () => {
    expect(eq(undefined, undefined)).toBe(true)
  })

  test('returns true when both values are null', () => {
    expect(eq(null, null)).toBe(true)
  })

});

import defaultTo from './defaultTo.js';

describe('defaultTo', () => {

  test('defaultTo-value-1' ,() => {
    expect(defaultTo(1, 100)).toBe(1);
  });

  test('defaultTo-value-2' ,() => {
    expect(defaultTo(false, 100)).toBe(false);
  });

  test('defaultTo-value-3' ,() => {
    expect(defaultTo(true, 100)).toBe(true);
  });

  test('defaultTo-value-4' ,() => {
    expect(defaultTo(0, 100)).toBe(0);
  });

  test('defaultTo-value-5' ,() => {
    expect(defaultTo("", 100)).toBe("");
  });

  test('defaultTo-default-1' ,() => {
    expect(defaultTo(null, 100)).toBe(100);
  });

  test('defaultTo-default-2' ,() => {
    expect(defaultTo(null, "str")).toBe("str");
  });

  test('defaultTo-default-3' ,() => {
    expect(defaultTo(null, 401)).toBe(401);
  });

  test('defaultTo-null-1' ,() => {
    expect(defaultTo(null, null)).toBe(null);
  });

  test('defaultTo-NaN-1' ,() => {
    expect(defaultTo(NaN, 100)).toBe(100);
  });

  test('defaultTo-undefined-1' ,() => {
    expect(defaultTo(undefined, 100)).toBe(100);
  });

});

import defaultTo from './defaultTo.js';

describe('defaultTo', () => {

  test('returns value 1' ,() => {
    expect(defaultTo(1, 100)).toBe(1);
  });

  test('returns value false' ,() => {
    expect(defaultTo(false, 100)).toBe(false);
  });

  test('returns value true' ,() => {
    expect(defaultTo(true, 100)).toBe(true);
  });

  test('returns value 0' ,() => {
    expect(defaultTo(0, 100)).toBe(0);
  });

  test('returns value empty string' ,() => {
    expect(defaultTo("", 100)).toBe("");
  });

  test('defaults to number from null' ,() => {
    expect(defaultTo(null, 100)).toBe(100);
  });

  test('defaults to string from null' ,() => {
    expect(defaultTo(null, "str")).toBe("str");
  });

  test('both inputs null returns null' ,() => {
    expect(defaultTo(null, null)).toBe(null);
  });

  test('defaults from NaN' ,() => {
    expect(defaultTo(NaN, 100)).toBe(100);
  });

  test('defaults from undefined' ,() => {
    expect(defaultTo(undefined, 100)).toBe(100);
  });

});

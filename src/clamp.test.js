import clamp from './clamp.js';

describe('clamp', () => {

  test('clamp-in-pos1' ,() => {
    expect(clamp(5,1,10)).toBe(5);
  });

  test('clamp-in-neg1' ,() => {
    expect(clamp(-5,-10,-1)).toBe(-5);
  });

  test('clamp-in-all1' ,() => {
    expect(clamp(0,-10,10)).toBe(0);
  }); 

  test('clamp-in-all2' ,() => {
    expect(clamp(-5,-10,10)).toBe(-5);
  }); 

  test('clamp-in-all3' ,() => {
    expect(clamp(5,-10,10)).toBe(5);
  });

  test('clamp-less-pos1' ,() => {
    expect(clamp(-5,1,10)).toBe(1);
  });

  test('clamp-less-neg1' ,() => {
    expect(clamp(-15,-10,-1)).toBe(-10);
  });

  test('clamp-less-all1' ,() => {
    expect(clamp(-15,-10,10)).toBe(-10);
  });

  test('clamp-greater-pos1' ,() => {
    expect(clamp(15,1,10)).toBe(10);
  });

  test('clamp-greater-neg1' ,() => {
    expect(clamp(0,-10,-1)).toBe(-1);
  });

  test('clamp-greater-all1' ,() => {
    expect(clamp(-15,-10,10)).toBe(10);
  });

  test('clamp-eq1' ,() => {
    expect(clamp(5,5,5)).toBe(5);
  });

  test('clamp-eq2' ,() => {
    expect(clamp(5,10,10)).toBe(10);
  });

  test('clamp-lim-low1' ,() => {
    expect(clamp(-5,-5,5)).toBe(5);
  });

  test('clamp-lim-upp1' ,() => {
    expect(clamp(10,-5,10)).toBe(10);
  });

});

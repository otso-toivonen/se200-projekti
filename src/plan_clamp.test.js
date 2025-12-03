import clamp from './clamp.js';

describe('clamp', () => {
  // clamp-in-pos1
  test('no clamp within pos. range' ,() => {
    expect(clamp(5,1,10)).toBe(5);
  });
  // clamp-in-neg1
  test('no clamp within neg. range' ,() => {
    expect(clamp(-5,-10,-1)).toBe(-5);
  });
  // clamp-in-all1
  test('no clamp within range for 0' ,() => {
    expect(clamp(0,-10,10)).toBe(0);
  }); 
  // clamp-in-all2
  test('no clamp within range for negative' ,() => {
    expect(clamp(-5,-10,10)).toBe(-5);
  }); 
  // clamp-in-all3
  test('no clamp within range for positive' ,() => {
    expect(clamp(5,-10,10)).toBe(5);
  });
  // clamp-less-pos1
  test('clamp to lower than positive range' ,() => {
    expect(clamp(-5,1,10)).toBe(1);
  });
  // clamp-less-neg1
  test('clamp to lower than negative range' ,() => {
    expect(clamp(-15,-10,-1)).toBe(-10);
  });
  // clamp-less-all1
  test('clamp to lower than range' ,() => {
    expect(clamp(-15,-10,10)).toBe(-10);
  });
  // clamp-greater-pos1
  test('clamp to greater than positive range' ,() => {
    expect(clamp(15,1,10)).toBe(10);
  });
  // clamp-greater-neg1
  test('clamp to greater than negative range' ,() => {
    expect(clamp(0,-10,-1)).toBe(-1);
  });
  // clamp-greater-all1
  test('clamp to greater than range' ,() => {
    expect(clamp(-15,-10,10)).toBe(10);
  });
  // clamp-eq1
  test('all inputs equal returns the input value' ,() => {
    expect(clamp(5,5,5)).toBe(5);
  });
  // clamp-eq2
  test('equal lower and upper bounds returns the bound' ,() => {
    expect(clamp(5,10,10)).toBe(10);
  });
  // clamp-lim-low1
  test('value same as the lower limit returns value' ,() => {
    expect(clamp(-5,-5,5)).toBe(-5);
  });
  // clamp-lim-upp1
  test('value same as the upper limit returns value' ,() => {
    expect(clamp(10,-5,10)).toBe(10);
  });

});

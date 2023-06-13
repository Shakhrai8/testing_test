const multiply = require ('./multiply.js');

describe('multiply', () => {
  it ('multiplies 3 and 3', () => {
    expect(multiply(3, 3)).toBe(9);
  });

  it ('multiplies 0 and 5', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  it ('multiplies 10 and 2', () => {
    expect(multiply(10, 2)).toBe(20);
  });

  it ('multiplies 3 and 7', () => {
    expect(multiply(3, 7)).toBe(21);
  });
});
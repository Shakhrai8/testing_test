const add = require ('./add');

describe('add', () => {
  it('adds 2 and 2', () =>{
    expect(add(2, 2)).toBe(4);
  });

  it('adds 0 and 5', () =>{
    expect(add(0, 5)).toBe(5);
  });

  it('adds 10 and 1', () =>{
    expect(add(10, 1)).toBe(11);
  });

  it('adds 999 and 1', () =>{
    expect(add(999, 1)).toBe(1000);
  });
});
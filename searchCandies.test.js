const searchCandies = require ('./searchCandies');

describe('search candies method', () => {
  it ('returns mars and maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });

  it ('returns just mars', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
  });
  it ('returns skittles, skitties, starburst', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  });
  it ('returns only skitties and skittles', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
  });

  it ('returns mars and maltesers', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });
});
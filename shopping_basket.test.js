const ShoppingBasket = require ('./shopping_basket');


describe('moscking tests', () =>{
  it ('works', () =>{
    const CandyDouble = { getName: () => "fake", getPrice: () => 9.99 };
    const new_basket = new ShoppingBasket;
    new_basket.addItem(CandyDouble);
    expect(new_basket.getTotalPrice()).toBe(9.99);
  });

  it ('works', () =>{
    const CandyDouble = { getName: () => "fake", getPrice: () => 10.00 };
    const CandyDouble2 = { getName: () => "fake2", getPrice: () => 10.00 };
    const new_basket = new ShoppingBasket;
    new_basket.addItem(CandyDouble);
    new_basket.addItem(CandyDouble2);
    expect(new_basket.getTotalPrice()).toBe(20);
  });
});
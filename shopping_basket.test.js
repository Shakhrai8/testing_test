const ShoppingBasket = require ('./shopping_basket');


describe('moscking tests', () =>{
  it ('works', () =>{
    const CandyDouble = { getPrice: () => 10 };
    const new_basket = new ShoppingBasket;
    new_basket.addItem(CandyDouble);
    new_basket.applyDiscount(6);
    expect(new_basket.getTotalPrice()).toBe(4);
  });
});
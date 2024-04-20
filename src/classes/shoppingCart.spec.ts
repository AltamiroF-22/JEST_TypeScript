import { Discount } from "./discount";
import { Product } from "./interface/cartProduct";
import { ShoppingCart } from "./shoppingCart";

const creatSut = () => {
  const discountMock = creaDiscountMock();
  const sut = new ShoppingCart(discountMock);

  return { discountMock, sut };
};

const creaDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartProduct = (name: string, price: number) => {
  class CartProductMock implements Product {
    constructor(public name: string, public price: number) {}
  }

  return new CartProductMock(name, price);
};

const creatSutWithProduct = () => {
  const { sut, discountMock } = creatSut();
  const cartProduct1 = createCartProduct("T-Shirt", 134.55);
  const cartProduct2 = createCartProduct("Pen", 1.55);
  sut.addProduct(cartProduct1);
  sut.addProduct(cartProduct2);

  return { sut, discountMock };
};

describe("ShoppingCart", () => {
  it("Should be an empty cart when no products was added", () => {
    const { sut } = creatSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it("Should have 2 cart items", () => {
    const { sut } = creatSutWithProduct();
    expect(sut.product.length).toBe(2);
  });

  it("Should add products and clear cart", () => {
    const { sut } = creatSutWithProduct();

    expect(sut.product.length).toBe(2);
    sut.clear();
    expect(sut.product.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it("Should remove products", () => {
    const { sut } = creatSutWithProduct();

    expect(sut.product.length).toBe(2);

    sut.removeProduct(sut.product.length - 1);
    expect(sut.product.length).toBe(1);

    sut.removeProduct(sut.product.length - 1);
    expect(sut.product.length).toBe(0);

    expect(sut.isEmpty()).toBe(true);
  });

  it("Should call discount.calculate( ) once when totalWithDiscount is called", () => {
    const { sut, discountMock } = creatSutWithProduct();
    const discountMockSpy = jest.spyOn(discountMock, "calculate");
    sut.totalWithDiscount()
    expect(discountMockSpy).toHaveBeenCalledTimes(1)
  });

  it("Should call discount.calculate with total price when totalWithDiscount is called", () => {
    const { sut, discountMock } = creatSutWithProduct();
    const discountMockSpy = jest.spyOn(discountMock, "calculate");
    sut.totalWithDiscount()
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total())
  });
});

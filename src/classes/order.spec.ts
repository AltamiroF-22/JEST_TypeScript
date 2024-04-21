import { ShoppingCartProps } from "./interface/shopingCartProps";
import { Product } from "./interface/cartProduct";
import { Order } from "./order";
import { MessagingProps } from "./interface/messagingProps";
import { PersistencyProps } from "./interface/persistencyProps";
import { CustomerOderProps } from "./interface/customer";

class ShoppingCartMock implements ShoppingCartProps {
  addProduct(product: Product): void {
    //
  }
  removeProduct(index: number): void {
    //
  }
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 1;
  }
  isEmpty(): boolean {
    return true;
  }
  clear(): void {}

  get product(): Readonly<Product[]> {
    return [];
  }
}

class MessagingMock implements MessagingProps {
  sendMessage(): void {}
}

class PersitencyMock implements PersistencyProps {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOderProps {
  getName(): string {
    return "";
  }

  getIDN(): string {
    return "";
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersitencyMock();
  const customerMock = new CustomerMock();

  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock
  );

  return { sut, shoppingCartMock, messagingMock, persistencyMock };
};

describe("Order", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should not checkout if cart is empty", () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, "isEmpty")
      .mockReturnValueOnce(true);

    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe("open");
  });

  it("Should checkout if cart is not empty", () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, "isEmpty")
      .mockReturnValueOnce(false);

    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe("closed");
  });

  // it('should send an email to customer', () => {
  //   const { sut, messagingMock } = createSut();
  //   const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
  //   sut.checkout();
  //   expect(messagingMockSpy).toHaveBeenCalledTimes(1);

  // });

  // it('should save order', () => {
  //   const { sut, persistencyMock } = createSut();
  //   const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
  //   sut.checkout();
  //   expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  // });

  // it('should clear cart', () => {
  //   const { sut, shoppingCartMock } = createSut();
  //   const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
  //   sut.checkout();
  //   expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  // });
});

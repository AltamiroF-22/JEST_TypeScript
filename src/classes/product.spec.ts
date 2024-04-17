import { Product } from "./interface/cartProduct";
import { Products } from "./products";

const createSut = (name: string, price: number): Product => {
  return new Products(name, price);
};

describe("Messaging", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return name and price ", () => {
    const sut = createSut("T-Shirt", 44.8);
    expect(sut).toHaveProperty("name", "T-Shirt");
    expect(sut.price).toBeCloseTo(44.8);
  });
});
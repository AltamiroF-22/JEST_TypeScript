import {
  Discount,
  FifityPercentDiscount,
  NoDiscount,
  TwentyPercentDiscount,
  TenPercentDiscount,
} from "./discount";

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe("Discounts", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should have no discount.", () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(100)).toBeCloseTo(100);
  });

  it("should have 10% discount on price.", () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(90);
  });

  it("should have 20% discount on price.", () => {
    const sut = createSut(TwentyPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(80);
  });

  it("should have 50% discount on price.", () => {
    const sut = createSut(FifityPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(50);
  });
});

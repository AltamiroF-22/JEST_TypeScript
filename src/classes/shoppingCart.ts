import { Discount } from "./discount";
import { Product } from "./interface/cartProduct";
import { ShoppingCartProps } from "./interface/shopingCartProps";

export class ShoppingCart implements ShoppingCartProps {
  private readonly _product: Product[] = [];

  constructor(private readonly discount: Discount) {}

  addProduct(product: Product): void {
    this._product.push(product);
  }

  removeProduct(index: number): void {
    this._product.splice(index, 1);
  }

  total(): number {
    return +this._product
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._product.length === 0;
  }

  clear(): void {
    this._product.length = 0;
  }

  get product(): Readonly<Product[]> {
    return this._product;
  }
}

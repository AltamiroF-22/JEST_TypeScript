import { Product } from "./cartProduct";

export interface ShoppingCartProps {
  addProduct(product: Product): void;
  removeProduct(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
  get product(): Readonly<Product[]>;
}

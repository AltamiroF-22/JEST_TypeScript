import { Product } from "./interface/cartProduct";

export class Products implements Product {
  constructor(public name: string, public price: number) {}
}

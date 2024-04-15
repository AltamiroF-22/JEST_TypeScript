import { OrderStatus } from "./interface/orderStatus";
import { MessagingProps } from "./interface/messagingProps";
import { PersistencyProps } from "./interface/persistencyProps";
import { CustomerOderProps } from "./interface/customer";
import { ShoppingCartProps } from "./interface/shopingCartProps";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCartProps,
    private readonly message: MessagingProps,
    private readonly persistency: PersistencyProps,
    private readonly customer: CustomerOderProps
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      return console.log("Your cart is empty!");
    }

    this._orderStatus = "closed";
    this.message.sendMessage(
      `Your order with total ${this.cart.totalWithDiscount()} has been received!`
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `The client is: ${this.customer.getName()} ${this.customer.getIDN()}`
    );
  }
}

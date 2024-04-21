import { ShoppingCart } from "./classes/shoppingCart";
import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Products } from "./classes/products";
import {
  FifityPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
  TwentyPercentDiscount,
} from "./classes/discount";
import {
  EnterpriseCustomer,
  IndividualCustomer,
} from "./classes/customerClass";
import { MessagingProps } from "./classes/interface/messagingProps";

//Discounts
const fifityPercentDiscount = new FifityPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

//----------------------------------   Discounts here
const shoppingCart = new ShoppingCart(tenPercentDiscount);

//customer or enterprise
const individualCustomer = new IndividualCustomer(
  "Altamiro",
  "Júnior",
  "123.456.789-00",
  22
);


const enterpriseCustomer = new EnterpriseCustomer(
  "company name",
  "74.154.317/0001-19"
);


const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer
);

shoppingCart.addProduct(new Products("T-Shirt", 23.44));
shoppingCart.addProduct(new Products("Pen", 3.44));
shoppingCart.addProduct(new Products("Laptop", 2333.4433));

// console.log(individualCustomer.getName());
// console.log(shoppingCart.product);
// console.log(shoppingCart.total());
// console.log(shoppingCart.totalWithDiscount());

order.checkout();
// console.log(order.orderStatus);

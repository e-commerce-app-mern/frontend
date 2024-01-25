import { CartItem, ShippingInfo, User } from "./types";

export type UserReducerInitialState = {
  user: User | null;
  loading: boolean;
};

export type CartReducerInitialState = {
  loading: boolean;
  cartItems: CartItem[];
  subtotal: number;
  shippingCharges: number;
  tax: number;
  discount: number;
  total: number;
  shippingInfo: ShippingInfo;
};

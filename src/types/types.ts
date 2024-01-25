export type User = {
  _id: string;
  name: string;
  email: string;
  dob: string;
  photo: string;
  gender: string;
  role: string;
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: string;
};

export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
};

export type CartItem = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

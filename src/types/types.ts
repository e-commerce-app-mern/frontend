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

export type OrderItem = Omit<CartItem, "stock"> & { _id: string };

export type Order = {
  orderItems: OrderItem[];
  subtotal: number;
  shippingCharges: number;
  tax: number;
  discount: number;
  total: number;
  shippingInfo: ShippingInfo;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
};

type CountAndChangeType = {
  revenue: number;
  product: number;
  user: number;
  order: number;
};

type LatestTransactionType = {
  _id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
};

export type Stats = {
  categoryCount: Record<string, number>[];
  percentChange: CountAndChangeType;
  count: CountAndChangeType;
  chart: {
    order: number[];
    revenue: number[];
  };
  userRatio: {
    male: number;
    female: number;
  };
  latestTransactions: LatestTransactionType[];
};

export type RevenueDistribution = {
  netMargin: number;
  discount: number;
  productionCost: number;
  burnt: number;
  marketingCost: number;
};

export type OrderFulfillment = {
  processing: number;
  shipped: number;
  delivered: number;
};

export type UserAgeGroup = { teen: number; adult: number; old: number };

export type Stock = {
  inStock: number;
  outOfStock: number;
};

export type AdminCustomer = {
  admin: number;
  customer: number;
};

export type Pie = {
  orderFulfilment: OrderFulfillment;
  productCategories: Record<string, number>[];
  stockAvailability: Stock;
  revenueDistribution: RevenueDistribution;
  usersAgeGroup: UserAgeGroup;
  adminCustomer: AdminCustomer;
};

export type Bar = {
  user: number[];
  product: number[];
  order: number[];
};

export type Line = {
  user: number[];
  product: number[];
  discount: number[];
  revenue: number[];
};

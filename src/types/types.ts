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
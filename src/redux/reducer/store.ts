import { configureStore } from "@reduxjs/toolkit";
import { orderAPI } from "../api/orderAPI";
import { productAPI } from "../api/productAPI";
import { userAPI } from "../api/userAPI";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer,
    [userReducer.name]: userReducer.reducer,
    [cartReducer.name]: cartReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userAPI.middleware,
      productAPI.middleware,
      orderAPI.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

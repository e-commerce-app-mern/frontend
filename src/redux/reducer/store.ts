import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "../api/userAPI";
import { userReducer } from "./userReducer";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [userReducer.name]: userReducer.reducer,
  },
  middleware: (mid) => [...mid(), userAPI.middleware],
});
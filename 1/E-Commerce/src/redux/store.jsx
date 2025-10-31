import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
});

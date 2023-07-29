import { configureStore } from "@reduxjs/toolkit";
import prodcutSlice from "../features/productSlice";

const store = configureStore({
  reducer: {
    products: prodcutSlice,
  },
});

export default store;

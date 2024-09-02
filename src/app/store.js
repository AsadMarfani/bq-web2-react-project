import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import filtersReducer from "./slices/filtersSlics";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
});

export default store;

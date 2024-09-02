import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Product 1", price: 100, category: "Electronics" },
  { id: 2, name: "Product 2", price: 200, category: "Furniture" },
  { id: 3, name: "Product 3", price: 150, category: "Electronics" },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("action : ", action);
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, name, price, category } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.price = price;
        existingProduct.category = category;
      }
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;

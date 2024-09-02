import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      console.log("action : ", action);
      state.category = action.payload;
    },
  },
});

export const { setCategory } = filtersSlice.actions;
export default filtersSlice.reducer;

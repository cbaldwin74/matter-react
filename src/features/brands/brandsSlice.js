import { createSlice } from "@reduxjs/toolkit";
import rawData from "../rawData";

export const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    names: rawData.map((x) => x.name).sort()
  },
  reducers: {
    addBrand: (state, action) => {
      state.names.push(action.payload);
      state.names.sort();
    },

    deleteBrand: (state, action) => {
      const index = state.names.find((x) => x === action.payload);
      state.names.splice(index, 1);
    }
  }
});

export const { addBrand, deleteBrand } = brandsSlice.actions;
export default brandsSlice.reducer;

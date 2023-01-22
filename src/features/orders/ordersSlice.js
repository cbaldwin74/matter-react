import { createSlice } from "@reduxjs/toolkit";
import rawData from "../rawData";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    data: rawData.map((x) => x).sort((a, b) => a.name.localeCompare(b.name))
  },
  reducers: {
    addBrandOrders: (state, action) => {
      state.data.push({
        name: action.payload,
        orders: []
      });
      state.data.sort((a, b) => a.name.localeCompare(b.name));
    },

    deleteBrandOrders: (state, action) => {
      const index = state.data.find((x) => x.name === action.payload);
      state.data.splice(index, 1);
    }
  }
});

export const { addBrandOrders, deleteBrandOrders } = ordersSlice.actions;
export default ordersSlice.reducer;

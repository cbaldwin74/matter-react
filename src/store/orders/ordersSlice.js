import { createSlice } from "@reduxjs/toolkit";
import rawData from "../rawData";
import dayjs from "dayjs";

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
      const index = state.data.findIndex((x) => x.name === action.payload);
      state.data.splice(index, 1);
    },

    addOrder: (state, action) => {
      const brand = state.data.find((x) => x.name === action.payload.name);
      brand.orders.unshift({
        date: dayjs().toISOString(),
        price: action.payload.price
      });
    },

    deleteOrder: (state, action) => {
      const brand = state.data.find((x) => x.name === action.payload.name);
      brand.orders.splice(action.payload.index, 1);
    }
  }
});

export const {
  addBrandOrders,
  addOrder,
  deleteBrandOrders,
  deleteOrder
} = ordersSlice.actions;
export default ordersSlice.reducer;

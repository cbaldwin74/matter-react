import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from "../features/brands/brandsSlice";
import ordersReducer from "../features/orders/ordersSlice";

export default configureStore({
  reducer: {
    brands: brandsReducer,
    orders: ordersReducer
  }
});

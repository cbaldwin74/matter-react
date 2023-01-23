import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from "../store/brands/brandsSlice";
import ordersReducer from "../store/orders/ordersSlice";

export default configureStore({
  reducer: {
    brands: brandsReducer,
    orders: ordersReducer
  }
});

import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from "../features/brands/brandsSlice";

export default configureStore({
  reducer: {
    brands: brandsReducer
  }
});

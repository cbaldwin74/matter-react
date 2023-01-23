import { combineReducers, configureStore } from "@reduxjs/toolkit";
import brandsReducer from "../store/brands/brandsSlice";
import ordersReducer from "../store/orders/ordersSlice";

// export default configureStore({
//   reducer: {
//     brands: brandsReducer,
//     orders: ordersReducer
//   }
// });

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  brands: brandsReducer,
  orders: ordersReducer
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

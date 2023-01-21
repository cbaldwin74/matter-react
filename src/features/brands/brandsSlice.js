import { createSlice } from "@reduxjs/toolkit";
import rawData from "../rawData";

export const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    names: rawData.map((x) => x.name)
  }
  // reducers: {}
});

export default brandsSlice.reducer;

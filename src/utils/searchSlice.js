import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    setSearchResult: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSearchResult } = searchSlice.actions;

export default searchSlice.reducer;

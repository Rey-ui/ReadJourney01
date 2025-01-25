import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    title: "",
    author: "",
  },
  reducers: {
    setTitleFilter(state, action) {
      state.title = action.payload;
    },
    setAuthorFilter(state, action) {
      state.author = action.payload;
    },
  },
});

export const { setTitleFilter, setAuthorFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: "library",
  initialState: {
    library: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const camper = action.payload;
      const exists = state.library.some((item) => item._id === camper._id);
      if (!exists) {
        state.library.push(camper);
      }
    },
    removeFavorite: (state, action) => {
      const camperId = action.payload;
      state.library = state.library.filter((camper) => camper._id !== camperId);
    },
  },
});

export const { addFavorite, removeFavorite } = librarySlice.actions;
export const libraryReducer = librarySlice.reducer;

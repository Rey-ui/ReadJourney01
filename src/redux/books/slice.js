import { createSlice } from "@reduxjs/toolkit";
import { fetchBooksRec } from "./operations";
const INITIAL_STATE = {
  results: [],
  totalPages: 0,
  page: 1,
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchBooksRec.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooksRec.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.results = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.page;
      })
      .addCase(fetchBooksRec.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
  // .addCase(addContact.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(addContact.fulfilled, (state, action) => {
  //   state.loading = false;
  //   state.error = null;
  //   state.items.push(action.payload);
  // })
  // .addCase(addContact.rejected, (state, action) => {
  //   state.loading = false;
  //   state.error = action.payload;
  // })
  // .addCase(deleteContact.pending, (state) => {
  //   state.loading = true;
  // })
  // .addCase(deleteContact.fulfilled, (state, action) => {
  //   state.loading = false;
  //   state.error = null;
  //   const index = state.items.findIndex(
  //     (task) => task.id === action.payload.id
  //   );
  //   state.items.splice(index, 1);
  // })
  // .addCase(deleteContact.rejected, (state, action) => {
  //   state.loading = false;
  //   state.error = action.payload;
  // })
  // .addCase(apiLogoutUser.fulfilled, (state) => {
  //   state.items = [];
  //   state.error = null;
  //   state.loading = false;
  // }),
});
export const booksReducer = booksSlice.reducer;

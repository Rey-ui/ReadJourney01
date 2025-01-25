import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetBooksRec } from "../../api/api";

export const fetchBooksRec = createAsyncThunk(
  "books/fetchAll",
  async (page, thunkAPI) => {
    try {
      const data = await requestGetBooksRec(page);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (formData, thunkAPI) => {
//     try {
//       const data = await requestAddContact(formData);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const data = await requestDeleteContact(contactId);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

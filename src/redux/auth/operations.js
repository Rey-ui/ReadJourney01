import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearToken,
  requestGetCurrentUser,
  requestLogOut,
  requestSignIn,
  requestSignUp,
  setToken,
} from "../../api/api";

export const apiRegisterUser = createAsyncThunk(
  "/users/signup",
  async (user, thunkAPI) => {
    try {
      console.log("Sending data to server:", user);
      const data = await requestSignUp(user);
      console.log(data);
      return data;
    } catch (err) {
      console.error("Registration failed:", err.message); // <=== Убедимся, что ошибка не в этом слое
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/signin",
  async (user, thunkAPI) => {
    try {
      const data = await requestSignIn(user);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const data = await requestGetCurrentUser();

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/signout",
  async (_, thunkAPI) => {
    try {
      await requestLogOut();
      clearToken();
      return;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

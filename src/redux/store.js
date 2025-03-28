import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contacts/slice.js";
// import { filtersReducer } from "./filters/filtersSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice.js";
import { booksReducer } from "./books/slice.js";
import { filtersReducer } from "./filter/slice.js";
import { libraryReducer } from "./libraryBooks/slice.js";
const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const favoritePersistConfig = {
  key: "library",
  storage,
  whitelist: ["library"],
};

export const store = configureStore({
  reducer: {
    books: booksReducer,
    // filters: filtersReducer,
    filters: filtersReducer,
    library: persistReducer(favoritePersistConfig, libraryReducer),
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import AuthSlice from "./slices/authSlice";

const reducers = combineReducers({
  authSlice: AuthSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(Store);
export type RootState = ReturnType<typeof persistedReducer>;

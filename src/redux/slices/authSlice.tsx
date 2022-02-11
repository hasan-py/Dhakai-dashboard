import { createSlice } from "@reduxjs/toolkit";
import { authReduxInterface } from "../../types/index";

const initState: authReduxInterface = {
  token: "",
  refreshToken: "",
  expiresAt: "",
};

// Here All of the ruducing function will be in reducers object
const AuthSlice = createSlice({
  name: "authSlice",
  initialState: initState,
  reducers: {
    SetAuthInfo: (state, action) => {
      const { payload } = action;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.expiresAt = payload.expiresAt;
    },
  },
});

export default AuthSlice;

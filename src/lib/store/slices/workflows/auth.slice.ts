import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../../index";
import { authType } from "@/lib/typings/core/auth.typings";

const initialState = {
  username: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth_slice",
  initialState,
  reducers: {
    updateAuthState: (state, action: PayloadAction<authType>) => {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
    },
  },
});

export const { updateAuthState } = authSlice.actions;
export const addLoginState = (state: RootState) => state.auth;
export default authSlice.reducer;

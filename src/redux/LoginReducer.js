import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: { token: "", loggedIn: false },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logged: (state, action) => {
      state.login = action.payload; // Update the entire login object
    },
  },
});
export const loginReducer = loginSlice.reducer;
export const { logged } = loginSlice.actions;
export const loginSelector = (state) => state.loginReducer.login;
export const token = (state) => state.loginReducer.login.token;

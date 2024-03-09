import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { loginReducer } from "../redux/LoginReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loginReducer,
  },
});

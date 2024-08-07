import { configureStore } from "@reduxjs/toolkit";
import { webReducer } from "./WebDataContext";

const store = configureStore({
  reducer: {
    webReducer,
  }
})

export default store;
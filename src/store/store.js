import { configureStore } from "@reduxjs/toolkit";
import { webReducer } from "./WebDataStore/WebDataContext";

const store = configureStore({
  reducer: {
    webReducer,
  }
})

export default store;
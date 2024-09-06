import { configureStore } from "@reduxjs/toolkit";
import { webReducer } from "./WebDataStore/WebDataContext";
import { adminReducer } from "./AdminDataStore/AdminDataContext";

const store = configureStore({
  reducer: {
    webReducer,
    adminReducer,
  }
})

export default store;
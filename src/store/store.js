import { configureStore } from "@reduxjs/toolkit";
import { webReducer } from "./WebDataStore/WebDataContext";
import { adminReducer } from "./AdminDataStore/AdminDataContext";
import { toastReducer } from "./ToastStore/ToastContext";

const store = configureStore({
  reducer: {
    webReducer,
    adminReducer,
    toastReducer,
  }
})

export default store;
import { createSlice } from "@reduxjs/toolkit";

const admin = createSlice({
  name: 'admin',
  initialState: {
    isLoggedIn: false,
    token: '',
    feedbacks: [],
  },
  reducers: {
    loginAdmin: (state, action) => {
      const { payload } = action;
      state.isLoggedIn = true;
      state.token = payload.token;
      localStorage.setItem('adminToken', payload.token);
    },
    logoutAdmin: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      localStorage.removeItem('adminToken');
    },
    setLogin: (state, action) => {
      const { payload } = action;
      if(payload)
        state.isLoggedIn = true;
      state.token = payload;
    },
    setFeedbacks: (state, action) => {
      const { payload } = action;
      state.feedbacks = payload.data;
    },
  },
});

export const adminReducer = admin.reducer;
export const { loginAdmin, logoutAdmin, setLogin, setFeedbacks } = admin.actions;
export const adminState = state => state.adminReducer;
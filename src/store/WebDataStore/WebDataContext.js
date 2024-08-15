import { createSlice } from "@reduxjs/toolkit";

const web = createSlice({
  name: 'webdata',
  initialState: {
    dataId: '',
    descHeading: '',
    descBody: [],
    testimonials: [],
    faqs: [],
  },
  reducers: {
    setData: (state, action) => {
      const { payload } = action;
      state.dataId = payload.data._id;
      state.descHeading = payload.data.desc.title;
      state.descBody = payload.data.desc.body;
      state.faqs = payload.data.faqs;
    }
  },
})

export const webReducer = web.reducer;
export const { setData } = web.actions;
export const webState = state => state.webReducer;
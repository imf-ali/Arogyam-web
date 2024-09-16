import { createSlice } from "@reduxjs/toolkit";

const web = createSlice({
  name: 'webdata',
  initialState: {
    dataId: '',
    bannerUrl: '',
    bannerFileName: '',
    descHeading: '',
    descBody: [],
    feedbacks: [],
    faqs: [],
  },
  reducers: {
    setData: (state, action) => {
      const { payload } = action;
      state.dataId = payload.data._id;
      state.bannerFileName = payload.data.bannerUrl;
      state.descHeading = payload.data.desc.title;
      state.descBody = payload.data.desc.body;
      state.faqs = payload.data.faqs;
    },
    setFeedbackData: (state, action) => {
      const { payload } = action;
      state.feedbacks = payload.data;
    },
    setUpdateFeedbackData: (state, action) => {
      const { payload } = action;
      const updatedFeedbacks = state.feedbacks.map(feedback =>
        feedback._id === payload.data._id ? { ...feedback, ...payload.data } : feedback
      );
      state.feedbacks = updatedFeedbacks;
    },
    setDeleteFeedbackData: (state, action) => {
      const { payload } = action;
      const updatedFeedbacks = state.feedbacks.filter(feedback => feedback._id !== payload.data._id);
      state.feedbacks = updatedFeedbacks;
    },
    setBannerImage: (state, action) => {
      const { payload } = action;
      state.bannerUrl = payload;
    },
  },
})

export const webReducer = web.reducer;
export const { setData, setFeedbackData, setUpdateFeedbackData, setDeleteFeedbackData, setBannerImage } = web.actions;
export const webState = state => state.webReducer;
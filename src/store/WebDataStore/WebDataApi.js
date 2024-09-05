import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setData, setDeleteFeedbackData, setFeedbackData, setUpdateFeedbackData } from "./WebDataContext";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export const getClinicData = createAsyncThunk('api/getClinicData', async (arg, thunkApi) => {
  try {
    const res = await axios.get(`${backendBaseUrl}/v1/clinic-meta`);
    thunkApi.dispatch(setData(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
})

export const updateClinicData = createAsyncThunk('api/updateClinicData', async (arg, thunkApi) => {
  try {
    const { bannerUrl, title, body, faqs } = arg;
    const id = thunkApi.getState().webReducer.dataId;
    const res = await axios({
      method: 'PUT',
      url: `${backendBaseUrl}/v1/admin/clinic-meta/${id}`,
      data: {
        bannerUrl,
        desc: {
          title,
          body
        },
        faqs,
      },
    });
    thunkApi.dispatch(setData(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

export const deleteClinicData = createAsyncThunk('api/deleteClinicData', async (arg, thunkApi) => {
  try {
    const { descBody, faq } = arg;
    const id = thunkApi.getState().webReducer.dataId;
    const res = await axios({
      method: 'DELETE',
      url: `${backendBaseUrl}/v1/admin/clinic-meta/${id}`,
      data: {
        descBody,
        faq
      }
    });
    thunkApi.dispatch(setData(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

export const getFeedbackData = createAsyncThunk('api/getFeedbackData', async (arg, thunkApi) => {
  try {
    const res = await axios.get(`${backendBaseUrl}/v1/admin/feedbacks`);
    thunkApi.dispatch(setFeedbackData(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

export const updateFeedbackData = createAsyncThunk('api/updateFeedbackData', async (arg, thunkApi) => {
  try {
    const { feedbackId, isTestimonial } = arg;
    const res = await axios({
      method: 'PUT',
      url: `${backendBaseUrl}/v1/admin/feedbacks/${feedbackId}`,
      data: {
        isTestimonial,
      },
    });
    thunkApi.dispatch(setUpdateFeedbackData(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});


export const deleteFeedbackData = createAsyncThunk('api/updateFeedbackData', async (arg, thunkApi) => {
  try {
    const { feedbackId } = arg;
    const res = await axios({
      method: 'DELETE',
      url: `${backendBaseUrl}/v1/admin/feedbacks/${feedbackId}`
    });
    thunkApi.dispatch(setDeleteFeedbackData(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});
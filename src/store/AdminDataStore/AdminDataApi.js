import { createAsyncThunk } from "@reduxjs/toolkit";
import { setData, setDeleteFeedbackData, setUpdateFeedbackData } from "../WebDataStore/WebDataContext";
import axios from "axios";
import { setFeedbacks } from "./AdminDataContext";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export const updateClinicData = createAsyncThunk('api/updateClinicData', async (arg, thunkApi) => {
  try {
    const { bannerUrl, title, body, faqs } = arg;
    const id = thunkApi.getState().webReducer.dataId;
    const res = await axios({
      method: 'PUT',
      url: `${backendBaseUrl}/v1/admin/clinic-meta/${id}`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      },
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
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      },
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
    const res = await axios({
      method: 'GET',
      url: `${backendBaseUrl}/v1/admin/feedbacks`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      }
    });
    thunkApi.dispatch(setFeedbacks(res.data));
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
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      },
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
      url: `${backendBaseUrl}/v1/admin/feedbacks/${feedbackId}`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      },
    });
    thunkApi.dispatch(setDeleteFeedbackData(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});
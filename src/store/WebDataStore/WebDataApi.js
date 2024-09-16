import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setBannerImage, setData, setFeedbackData } from "./WebDataContext";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export const getClinicData = createAsyncThunk('api/getClinicData', async (arg, thunkApi) => {
  try {
    const res = await axios.get(`${backendBaseUrl}/v1/clinic-meta`);
    thunkApi.dispatch(setData(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
})

export const getClinicDataBanner = createAsyncThunk('api/getClinicDataBanner', async (arg, thunkApi) => {
  try {
    const { filename } = arg;
    const res = await axios({
      method: 'GET',
      url: `${backendBaseUrl}/v1/clinic-meta/banner`,
      params: {
        filename,
      },
      responseType: 'blob'
    });
    const imageUrl = URL.createObjectURL(res.data);
    thunkApi.dispatch(setBannerImage(imageUrl));
  } catch (err) {
    console.log('Something went wrong', err);
  }
})

export const getFeedbackData = createAsyncThunk('api/getFeedbackData', async (arg, thunkApi) => {
  try {
    const res = await axios.get(`${backendBaseUrl}/v1/testimonials`);
    thunkApi.dispatch(setFeedbackData(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});
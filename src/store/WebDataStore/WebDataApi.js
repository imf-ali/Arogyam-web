import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setData, setFeedbackData } from "./WebDataContext";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export const getClinicData = createAsyncThunk('api/getClinicData', async (arg, thunkApi) => {
  try {
    const res = await axios.get(`${backendBaseUrl}/v1/clinic-meta`);
    thunkApi.dispatch(setData(res.data));
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
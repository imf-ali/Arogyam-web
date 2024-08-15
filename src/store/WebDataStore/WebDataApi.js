import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setData } from "./WebDataContext";

export const getClinicData = createAsyncThunk('api/getClinicData', async (arg, thunkApi) => {
  try {
    const res = await axios.get('http://localhost:8080/v1/admin/clinic-meta');
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
      url: `http://localhost:8080/v1/admin/clinic-meta/${id}`,
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
      url: `http://localhost:8080/v1/admin/clinic-meta/${id}`,
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
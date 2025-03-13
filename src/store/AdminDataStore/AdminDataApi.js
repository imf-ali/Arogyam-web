import { createAsyncThunk } from "@reduxjs/toolkit";
import { setData, setDeleteFeedbackData, setUpdateFeedbackData } from "../WebDataStore/WebDataContext";
import axios from "axios";
import { setAppointments, setCurrentPatient, setDiagnosisJsonConfig, setFeedbacks, setLogin } from "./AdminDataContext";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export const validateUser = createAsyncThunk('api/valiidateUser', async (arg, thunkApi) => {
  try {
    const { token } = arg;
    const res = await axios({
      method: 'POST',
      url: `${backendBaseUrl}/v1/admin/jwtValidate`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    thunkApi.dispatch(setLogin({ status: res.status, token }));
  } catch (err) {
    console.log('Something went wrong', err);
    thunkApi.dispatch(setLogin({ status: err.response.status}));
  }
});

export const updateClinicData = createAsyncThunk('api/updateClinicData', async (arg, thunkApi) => {
  try {
    const { formData } = arg;
    const id = thunkApi.getState().webReducer.dataId;
    const res = await axios.put(`${backendBaseUrl}/v1/admin/clinic-meta/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
        'Content-Type': 'multipart/form-data', 
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

export const getAllAppointments = createAsyncThunk('api/getAllAppointments', async (arg, thunkApi) => {
  try {
    const { date, page } = arg;
    const res = await axios({
      method: 'GET',
      url: `${backendBaseUrl}/v1/admin/appointments`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      },
      params: {
        date,
        page,
      },
    });
    thunkApi.dispatch(setAppointments(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

export const updateAppointment = createAsyncThunk('api/updateAppointment', async (arg, thunkApi) => {
  try {
    const { appointmentId, status } = arg;
    await axios({
      method: 'PUT',
      url: `${backendBaseUrl}/v1/admin/appointments/${appointmentId}`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      },
      data: {
        status,
      },
    });
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

export const getPatientData = createAsyncThunk('api/getPatientData', async (arg, thunkApi) => {
  try {
    const { patientId } = arg;
    const res = await axios({
      method: 'GET',
      url: `${backendBaseUrl}/v1/admin/get-patient-data/${patientId}`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      }
    });
    thunkApi.dispatch(setCurrentPatient(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

export const getJsonConfig = createAsyncThunk('api/getJsonConfig', async (arg, thunkApi) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${backendBaseUrl}/v1/admin/diagnosis-json`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      }
    });
    thunkApi.dispatch(setDiagnosisJsonConfig(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

export const saveDiagnosisData = createAsyncThunk('api/saveDiagnosisData', async (arg, thunkApi) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${backendBaseUrl}/v1/admin/diagnosis`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      },
      data: {
        patientId: arg.patientId,
        sections: arg.sections,
      }
    });
    console.log(res.data);
    // thunkApi.dispatch(setDiagnosisJsonConfig(res.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

export const savePrescriptionData = createAsyncThunk('api/savePrescriptionData', async (arg, thunkApi) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${backendBaseUrl}/v1/admin/prescriptions`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      },
      data: {
        ...arg
      }
    });
    thunkApi.dispatch(setCurrentPatient(res.data.patient));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

export const updatePrescriptionData = createAsyncThunk('api/updatePrescriptionData', async (arg, thunkApi) => {
  try {
    const { id, ...otherArg } = arg;
    const res = await axios({
      method: 'PUT',
      url: `${backendBaseUrl}/v1/admin/prescriptions/${id}`,
      headers: {
        Authorization: `Bearer ${thunkApi.getState().adminReducer.token}`,
      },
      data: {
        ...otherArg,
      }
    });
    thunkApi.dispatch(setCurrentPatient(res.data.data));
  } catch (err) {
    console.log('Something went wrong', err);
  }
});




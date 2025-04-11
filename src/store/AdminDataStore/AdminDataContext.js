import { createSlice } from "@reduxjs/toolkit";

const admin = createSlice({
  name: 'admin',
  initialState: {
    isLoggedIn: false,
    token: '',
    feedbacks: [],
    appointments: [],
    currentPatient: null,
    diagnosisJsonConfig: null,
    pdfBuffer: null,
    patientDiagnosisData: null,
    isDoctor: false,
  },
  reducers: {
    loginAdmin: (state, action) => {
      const { payload } = action;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.isDoctor = payload.admin.isDoctor;
      localStorage.setItem('adminToken', payload.token);
      localStorage.setItem('isDoctor', payload.admin.isDoctor);
    },
    logoutAdmin: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      localStorage.removeItem('adminToken');
      localStorage.removeItem('isDoctor');
    },
    setLogin: (state, action) => {
      const { payload } = action;
      if(payload.status === 200){
        state.isLoggedIn = true;
        state.token = payload.token;
        state.isDoctor = payload.isDoctor;
      } else {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('isDoctor');
      }
    },
    setFeedbacks: (state, action) => {
      const { payload } = action;
      state.feedbacks = payload.data;
    },
    setAppointments: (state, action) => {
      const { payload } = action;
      state.appointments = payload.data;
    },
    setCurrentPatient: (state, action) => {
      const { payload } = action;
      state.currentPatient = payload;
    },
    setDiagnosisJsonConfig: (state, action) => {
      const { payload } = action;
      state.diagnosisJsonConfig = payload.data;
    },
    setPdfBuffer: (state, action) => {
      const { payload } = action;
      state.pdfBuffer = payload.pdfBuffer;
    },
    setPatientDiagnosisData: (state, action) => {
      const { payload } = action;
      state.patientDiagnosisData = payload.data;
    }
  },
});

export const adminReducer = admin.reducer;
export const { 
  loginAdmin, 
  logoutAdmin, 
  setLogin, 
  setFeedbacks, 
  setAppointments, 
  setCurrentPatient, 
  setDiagnosisJsonConfig, 
  setPdfBuffer,
  setPatientDiagnosisData
} = admin.actions;
export const adminState = state => state.adminReducer;
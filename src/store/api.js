import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchSlotsData = async (selectedDate) => {
  try {
    const res = await axios.get(`${backendBaseUrl}/v1/slots?date=${selectedDate}`);
    return res.data;
  } catch (err) {
    return;
  }
}

export const confirmSlotData = async (name, phone, appointmentTime) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${backendBaseUrl}/v1/appointments`,
      data: {
        name,
        phone,
        appointmentTime,
      }
    });
    return res;
  } catch (err) {
    return err.response;
  }
}

export const trackStatus = async (name, phone) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${backendBaseUrl}/v1/track-status`,
      params: {
        name,
        phone,
      }
    });
    return res.data;
  } catch (err) {
    return err.response;
  }
}

export const submitFeedback = async (name, desc, beforeImage, afterImage) => {
  console.log(name, desc, beforeImage, afterImage);
  try {
    const res = await axios({
      method: 'POST',
      url: `${backendBaseUrl}/v1/feedbacks`,
      data: {
        name,
        desc,
        beforeImage,
        afterImage,
      }
    });
    return res;
  } catch (err) {
    return err.response;
  }
}

export const signUp = async (name, email, phone, password, key) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${backendBaseUrl}/v1/admin/signup`,
      data: {
        name,
        email,
        phone,
        password,
        key,
      }
    });
    return res;
  } catch (err) {
    return err.response;
  }
}

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${backendBaseUrl}/v1/admin/login`,
      data: {
        email,
        password,
      }
    });
    return res;
  } catch (err) {
    return err.response;
  }
}

export const logout = async (token) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${backendBaseUrl}/v1/admin/logout`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return res;
  } catch (err) {
    return err.response;
  }
}

export const loginPatientPortal = async (patientId, phone) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${backendBaseUrl}/v1/patient-portal`,
      params: {
        patientId,
        phone,
      }
    });
    return res;
  } catch (err) {
    return err.response;
  }
}

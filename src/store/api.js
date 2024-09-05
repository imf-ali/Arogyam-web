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

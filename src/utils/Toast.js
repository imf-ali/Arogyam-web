import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideToast, toastState } from "../store/ToastStore/ToastContext";
import styles from '../styles/utils/Toast.module.css';
import { ToastContainer, toast } from 'react-toastify';


const Toast = () => {
  const dispatch = useDispatch();
  const { message, isVisible } = useSelector(toastState);

  useEffect(() => {
    if (isVisible) {
      dispatch(hideToast());
    }
    if (message) {
      toast(message, {
        autoClose: 3000,
        className: styles.fontUpdate,
      });
    }
  }, [isVisible, message, dispatch]);

  return <ToastContainer />;
};

export default Toast;

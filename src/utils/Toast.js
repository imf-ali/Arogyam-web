import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideToast, toastState } from "../store/ToastStore/ToastContext";
import styles from '../styles/utils/Toast.module.css';


const Toast = () => {
  const dispatch = useDispatch();
  const { message, isVisible } = useSelector(toastState);

  console.log('toast', message, isVisible);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, dispatch]);

  if (!isVisible) return null;

  return <div className={styles.toastContainer}>{message}</div>;
};

export default Toast;

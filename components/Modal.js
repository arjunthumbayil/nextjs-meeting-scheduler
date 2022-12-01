import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className={styles.modal}>
      <p className={styles.modal_p}>{modalContent}</p>
    </div>
  );
};

export default Modal;

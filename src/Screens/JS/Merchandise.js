import React from "react";
import styles from "../CSS/Merchandise.module.css";
import BackButton from "../../Components/BackButton";

function Merchandise() {
  return (
    <div className={styles.merchantbg}>
      <BackButton />
      <div className={styles.merchanttext}>PAGE UNDER MAINTENANCE!!!</div>
    </div>
  );
}

export default Merchandise;

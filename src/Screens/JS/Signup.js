import React from "react";
import styles from "../CSS/LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.loginbackbutton}>
        <a href="javascript:history.back()" className={styles.loginback}>
          Back
        </a>
      </div>
      <div className={styles.card}>
        <h2 className={styles.title}>Signup</h2>
        <form>
          <div className={styles["form-group"]}>
            <input
              type="email"
              className={styles["form-control"]}
              placeholder="Email"
            />
          </div>
          <div className={styles["form-group"]}>
            <input
              type="password"
              className={styles["form-control"]}
              placeholder="Password"
            />
          </div>
          <button type="submit" className={styles.btn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

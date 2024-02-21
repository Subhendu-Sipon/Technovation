import React from 'react';
import styles from '../CSS/LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        <form>
          <div className={styles['form-group']}>
            <input type="email" className={styles['form-control']} placeholder="Email" />
          </div>
          <div className={styles['form-group']}>
            <input type="password" className={styles['form-control']} placeholder="Password" />
          </div>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
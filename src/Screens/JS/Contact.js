import React from "react";
import styles from "../CSS/Contact.module.css";

function Contact() {
  return (
    <div>
      <div className={styles.contactcontainer}>
        <div className={styles.contactbackbutton}>
          <a href="javascript:history.back()" className={styles.contactback}>
            Back
          </a>
        </div>
        <div className={styles.contactcard}>
          <h2 className={styles.contacttitle}>Reach Us</h2>
          <div class="container">
            <div class="row">
              <div class="col">
                <p>1. Reach Talcher Road Railway Station.</p>
                <p>2. Take a auto-rickshaw to Sarang.</p>
                <p>3. Land at the amazing Technovation 5.0 .</p>
              </div>
              <div class="col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14034.988976522516!2d85.25584778392873!3d20.934714949624126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18b5e2246737db%3A0x464c86301dac34cb!2sIndira%20Gandhi%20Institute%20Of%20Technology%2C%20Sarang!5e0!3m2!1sen!2sin!4v1709131280522!5m2!1sen!2sin"
                  // width="600"
                  // height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className={styles.mapcontact}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

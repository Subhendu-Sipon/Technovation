import React from "react";
import styles from "../CSS/Trailer.module.css";
import { InstagramEmbed } from "react-social-media-embed";
import BackButton from "../../Components/BackButton";

function Trailer() {
  return (
    <div className={styles.bgtrailer}>
      <BackButton />
      <div className={styles.instacard}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C4OVZR-RRot/"
          width={328}
        />
      </div>
      <div className={styles.instacard}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C4KMflmIbIn/"
          width={328}
        />
      </div>
      <div className={styles.instacard}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C394HdCRPHO/"
          width={328}
        />
      </div>
      <div className={styles.instacard}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C38dazAy5A-/"
          width={328}
        />
      </div>
      <div className={styles.instacard}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C3xtDd7q5H_/"
          width={328}
        />
      </div>
    </div>
  );
}

export default Trailer;

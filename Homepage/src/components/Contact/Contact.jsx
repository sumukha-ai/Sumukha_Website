import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
import { TOS } from '../TOS/TOS';

export const Contact = () => {
  return (<div>
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>

      <div>
        <ul className={styles.links}>
          <li className={styles.link} >
            <a href="mailto:sumukha.ai@gmail.com">
              <img src={getImageUrl("contact/email.png")} alt="Email" />
            </a>

          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com"><img src={getImageUrl("contact/linkedin.png")} alt="Email" /></a>
          </li>
          <li className={styles.link}>
            <a href="https://wa.me/+919591691283"> <img src={getImageUrl("contact/whatsapp.png")} alt="Email" /></a>
          </li>
        </ul>

      </div>
    </footer>
    <div>
      <p className={styles.copyright}>
        <p>Copyright &copy; Sumukha AI Private Limited. All Rights Reserved. &nbsp;</p>
        <p className={styles.tos}>
          <a href="/terms-of-services">&nbsp; Terms of Services. &nbsp;</a>
          <a href="/privacy-policy">&nbsp; Privacy Policy. </a>
        </p>
      </p>

    </div>
  </div>

  )
}

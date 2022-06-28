import styles from "./contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <div className={styles.headingContainer}>
        <h1>Contact Me</h1>
      </div>
      <div className={styles.contactsContainer}>
        <div className={styles.contactInfo}>
          <Image src="/line-logo.svg" alt="line" width={45} height={45} />
          <a href="http://line.me/ti/p/~ruaaco" target="_blank" rel="noreferrer">
            <p>ruaaco</p>
          </a>
        </div>
        <div className={styles.contactInfo}>
          <Image src="/email-logo.svg" alt="email" width={45} height={45} />
          <a href="mailto:acoxstpd@gmail.com" target="_blank" rel="noreferrer">
            <p>acoxstpd@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import styles from './contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return <div className={styles.contactContainer}>
    <div className={styles.headingContainer}>
      <h1>Contact Me</h1>
    </div>
    <div className={styles.contactsContainer}>
      <div className={styles.contactInfo}>
        <Image src="/line-logo.svg" alt="line" width={45} height={45} />
        <p>@ruaaco</p>
      </div>
      <div className={styles.contactInfo}>
        <Image src="/email-logo.svg" alt="email" width={45} height={45} />
        <p>acoxstpd@gmail.com</p>
      </div>
    </div>
  </div>
}

export default Contact;
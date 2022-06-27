import styles from "./heading.module.css";
import Image from 'next/image'
import Icon from "./icon";
import SecondaryButton from "../secondaryButton";

const Heading = () => {
  return <div className={styles.headingContainer}>
    <div className={styles.imageContainer}>
      <Image src="/stock.png" alt="profile picture" width={800} height={800} />
    </div>
    <div className={styles.textContainer}>
      <h1>Hello, I'm Marcho!</h1>
      <p>I am an <strong>undergraduate informatics student</strong> at <strong>Bandung Institute of Technology</strong> with a passion in <strong>web development.</strong></p>
      <p>Click on the icon/buttons to learn more about me!</p>
      <div className={styles.iconContainer}>
        <Icon image="/github.svg" href="https://github.com/acomarcho" />
        <Icon image="/linkedin.svg" href="https://www.linkedin.com/in/marchotridyo/" />
      </div>
      <div className={styles.buttonContainer}>
        <SecondaryButton text="Download CV" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </div>
    </div>
  </div>;
};

export default Heading;

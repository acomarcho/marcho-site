import styles from "./primaryButton.module.css";

const SecondaryButton = (props: { text: string; href: string }) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <button className={styles.primaryButton}>{props.text}</button>
    </a>
  );
};

export default SecondaryButton;

import styles from "./secondaryButton.module.css";

const SecondaryButton = (props: { text: string; href: string }) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <button className={styles.secondaryButton}>{props.text}</button>
    </a>
  );
};

export default SecondaryButton;

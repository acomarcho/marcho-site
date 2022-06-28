import styles from "./primaryButton.module.css";

const PrimaryButton = (props: { text: string; href: string; newTab?: boolean }) => {
  if (props.newTab === undefined || props.newTab === true) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        <button className={styles.primaryButton}>{props.text}</button>
      </a>
    );
  }

  return (
    <a href={props.href}>
      <button className={styles.primaryButton}>{props.text}</button>
    </a>
  );
};

export default PrimaryButton;

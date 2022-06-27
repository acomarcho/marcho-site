import Image from "next/image";
import styles from "./icon.module.css";

const Icon = (props: { image: string; href: string }) => {
  return (
    <a
      className={styles.iconCircle}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <Image src={props.image} alt={props.href} width={20} height={20} />
    </a>
  );
};

export default Icon;

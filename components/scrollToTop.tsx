import styles from "./scrollToTop.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(document.documentElement.scrollTop);
      setDocumentHeight(document.documentElement.clientHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={styles.scrollButton}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0 });
      }}
      style={
        scrollHeight > documentHeight
          ? { display: "grid" }
          : { display: "none" }
      }
    >
      <Image
        src="/chevron-up.svg"
        alt="chevron-up"
        width={22}
        height={12.5}
      />
    </div>
  );
};

export default ScrollToTop;

import { useState, useRef, useEffect } from "react";
import styles from "./accordion.module.css";
import Image from "next/image";

const Accordion = (props: { title: string; children: JSX.Element, open?: boolean }) => {
  const [isOpen, setIsOpen] = useState(props.open || false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setContentHeight(contentRef.current!.getBoundingClientRect().height);
    }, 100);
  }, [])

  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0
  });
 
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      setTimeout(() => {
        setContentHeight(contentRef.current!.getBoundingClientRect().height);
      }, 100);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeading}>
        <h2>{props.title}</h2>
        <div
          className={
            !isOpen
              ? `${styles.chevronContainer}`
              : `${styles.chevronContainer} ${styles.rotate180}`
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/chevron-down.svg"
            alt="chevron-down"
            width={22}
            height={12.5}
          />
        </div>
      </div>
      <div
        className={styles.accordionContent}
        style={
          isOpen
            ? { height: contentHeight }
            : { height: 0 }
        }
      >
        <div className={styles.resizeableContent} ref={contentRef}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

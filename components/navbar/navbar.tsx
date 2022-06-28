import styles from "./navbar.module.css";
import Image from "next/image";
import { useState, useRef } from "react";
import { link } from "fs";

const links = [
  {
    href: "#home",
    text: "Home",
  },
  {
    href: "#experience",
    text: "Experience",
  },
  {
    href: "#projects",
    text: "Projects",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

const Navbar = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const heightRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.navbarContainer}>
      <div
        className={styles.navbarButton}
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <Image
          src="/bars.svg"
          width={22}
          height={22}
          alt="bars"
          style={isToggled ? { transform: "rotate(90deg)" } : {}}
        />
      </div>
      <div
        className={styles.linksContainer}
        style={
          isToggled
            ? { height: heightRef.current?.getBoundingClientRect().height }
            : { height: 0 }
        }
      >
        <div className={styles.linksHeightContainer} ref={heightRef}>
          {links.map((link, idx) => {
            return (
              <div className={styles.link} key={idx} onClick={() => {
                setIsToggled(false);
              }}>
                <a href={link.href}>{link.text}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

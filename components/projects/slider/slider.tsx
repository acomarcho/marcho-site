import styles from "./slider.module.css";
import PrimaryButton from "../../primaryButton";
import Image from "next/image";
import { useState, useRef, RefObject, useEffect } from "react";

const contents = [
  {
    image: "/codykit.png",
    content: (
      <p>
        A <strong>static website</strong> made for CodyKit. This project was
        made with <strong>React</strong> alongside some{" "}
        <strong>animation libraries</strong>.
      </p>
    ),
    href: "https://www.codykit.id",
  },
  {
    image: "/pvt.png",
    content: (
      <p>
        A <strong>fullstack website</strong> made for Psychomotor Vigilante Taks
        tests. This project was made with <strong>Next with TypeScript</strong>{" "}
        with a backend connecting to the <strong>Google Sheets API</strong>.
      </p>
    ),
    href: "https://pvt-demo.vercel.app/",
  },
  {
    image: "/daily-wins.png",
    content: (
      <p>
        A <strong>fullstack website</strong> made to track your daily wins. This
        project was made with <strong>React</strong> as a frontend and an{" "}
        <strong>Express</strong> backend connecting to a{" "}
        <strong>PostgreSQL</strong> database hosted at <strong>Heroku</strong>.
        It has an authentication system that uses <strong>JWT</strong>.
      </p>
    ),
    href: "https://daily-wins.vercel.app/",
  },
  {
    image: "/kata-baku.png",
    content: (
      <p>
        A <strong>vanilla JS</strong> website styled with <strong>SCSS</strong>{" "}
        for Indonesian students preparing for university entrance exams
        specifically at memorizing correct form of Indonesian words.
      </p>
    ),
    href: "https://acomarcho.github.io/kataBaku/",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [firstIndex, setFirstIndex] = useState(contents.length - 1);
  const [secondIndex, setSecondIndex] = useState(0);
  const [thirdIndex, setThirdIndex] = useState(1);

  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    setContainerHeight(secondRef.current?.getBoundingClientRect().height!);
  }, []);

  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    function handleResize() {
      const [leftRef, centerRef, rightRef] = getSliders();

      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      setContainerHeight(centerRef.current?.getBoundingClientRect().height!);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (currentIndex === firstIndex) {
      setContainerHeight(firstRef.current!.getBoundingClientRect().height);
    } else if (currentIndex === secondIndex) {
      setContainerHeight(secondRef.current!.getBoundingClientRect().height);
    } else {
      setContainerHeight(thirdRef.current!.getBoundingClientRect().height);
    }
  }, [currentIndex, firstIndex, secondIndex, thirdIndex])

  const getSliders = () => {
    /* Returns [leftRef, centerRef, rightRef] */
    let leftRef: RefObject<HTMLDivElement> | null = null;
    let centerRef: RefObject<HTMLDivElement> | null = null;
    let rightRef: RefObject<HTMLDivElement> | null = null;
    if (firstRef.current?.className.includes(styles.left)) {
      leftRef = firstRef;
    } else if (firstRef.current?.className.includes(styles.right)) {
      rightRef = firstRef;
    } else {
      centerRef = firstRef;
    }

    if (secondRef.current?.className.includes(styles.left)) {
      leftRef = secondRef;
    } else if (secondRef.current?.className.includes(styles.right)) {
      rightRef = secondRef;
    } else {
      centerRef = secondRef;
    }

    if (thirdRef.current?.className.includes(styles.left)) {
      leftRef = thirdRef;
    } else if (thirdRef.current?.className.includes(styles.right)) {
      rightRef = thirdRef;
    } else {
      centerRef = thirdRef;
    }

    return [
      leftRef as RefObject<HTMLDivElement>,
      centerRef as RefObject<HTMLDivElement>,
      rightRef as RefObject<HTMLDivElement>,
    ];
  };

  const updateIndexes = (idx: number) => {
    if (firstRef.current!.className.includes(styles.left)) {
      setFirstIndex(getPrevIndex(idx));
    } else if (firstRef.current!.className.includes(styles.right)) {
      setFirstIndex(getNextIndex(idx));
    } else {
      setFirstIndex(idx);
    }

    if (secondRef.current!.className.includes(styles.left)) {
      setSecondIndex(getPrevIndex(idx));
    } else if (secondRef.current!.className.includes(styles.right)) {
      setSecondIndex(getNextIndex(idx));
    } else {
      setSecondIndex(idx);
    }

    if (thirdRef.current!.className.includes(styles.left)) {
      setThirdIndex(getPrevIndex(idx));
    } else if (thirdRef.current!.className.includes(styles.right)) {
      setThirdIndex(getNextIndex(idx));
    } else {
      setThirdIndex(idx);
    }
  };

  const handleNext = () => {
    const [leftRef, centerRef, rightRef] = getSliders();

    leftRef.current!.className = `${styles.sliderContent} ${styles.right}`;
    centerRef.current!.className = `${styles.sliderContent} ${styles.left}`;
    rightRef.current!.className = `${styles.sliderContent}`;

    let nextIndex = getNextIndex();
    setCurrentIndex(nextIndex);
    updateIndexes(nextIndex);
  };

  const handlePrev = () => {
    const [leftRef, centerRef, rightRef] = getSliders();

    leftRef.current!.className = `${styles.sliderContent}`;
    centerRef.current!.className = `${styles.sliderContent} ${styles.right}`;
    rightRef.current!.className = `${styles.sliderContent} ${styles.left}`;

    let prevIndex = getPrevIndex();
    setCurrentIndex(prevIndex);
    updateIndexes(prevIndex);
  };

  const getPrevIndex = (ci: number = currentIndex) => {
    return ci === 0 ? contents.length - 1 : ci - 1;
  };

  const getNextIndex = (ci: number = currentIndex) => {
    return ci === contents.length - 1 ? 0 : ci + 1;
  };

  return (
    <>
      <div
        className={styles.sliderContainer}
        style={{ height: containerHeight }}
      >
        {/* Leftmost slider */}
        <div
          className={`${styles.sliderContent} ${styles.left}`}
          ref={firstRef}
        >
          <div className={styles.sliderImage}>
            <Image
              src={contents[firstIndex].image}
              alt="project image"
              width={1225}
              height={776}
            />
          </div>
          <div></div>
          <div className={styles.sliderInfo}>
            {contents[firstIndex].content}
          </div>
          <div className={styles.sliderButton}>
            <PrimaryButton
              text="Visit project"
              href={contents[firstIndex].href}
            />
          </div>
        </div>
        {/* Central slider */}
        <div className={styles.sliderContent} ref={secondRef}>
          <div className={styles.sliderImage}>
            <Image
              src={contents[secondIndex].image}
              width={1225}
              height={776}
              alt="project image"
            />
          </div>
          <div></div>
          <div className={styles.sliderInfo}>
            {contents[secondIndex].content}
          </div>
          <div className={styles.sliderButton}>
            <PrimaryButton
              text="Visit project"
              href={contents[secondIndex].href}
            />
          </div>
        </div>
        {/* Rightmost slider */}
        <div
          className={`${styles.sliderContent} ${styles.right}`}
          ref={thirdRef}
        >
          <div className={styles.sliderImage}>
            <Image
              src={contents[thirdIndex].image}
              width={1225}
              height={776}
              alt="project image"
            />
          </div>
          <div></div>
          <div className={styles.sliderInfo}>
            {contents[thirdIndex].content}
          </div>
          <div className={styles.sliderButton}>
            <PrimaryButton
              text="Visit project"
              href={contents[thirdIndex].href}
            />
          </div>
        </div>
      </div>
      <div className={styles.navigationContainer}>
        <button onClick={handlePrev}>
          <Image
            src="/chevron-left.svg"
            alt="chevron-left"
            width={15}
            height={26}
          />
        </button>
        <div className={styles.circlesContainer}>
          {contents.map((_, idx) => {
            return (
              <div
                className={
                  idx === currentIndex
                    ? `${styles.circle} ${styles.active}`
                    : styles.circle
                }
                onClick={() => {
                  if (idx > currentIndex) {
                    handleNext();
                  } else if (idx < currentIndex) {
                    handlePrev();
                  }
                  updateIndexes(idx);
                  setCurrentIndex(idx);
                }}
                key={idx}
              ></div>
            );
          })}
        </div>
        <button onClick={handleNext}>
          <Image
            src="/chevron-right.svg"
            alt="chevron-right"
            width={15}
            height={26}
          />
        </button>
      </div>
    </>
  );
};

export default Slider;

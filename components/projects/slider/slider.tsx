import styles from "./slider.module.css";
import PrimaryButton from "../../primaryButton";
import Image from "next/image";
import { useState, useRef, RefObject, useEffect } from "react";

const contents = [
  {
    image: "/codykit.png",
    text: "A static website made for CodyKit. This project was made with React alongside some animation libraries.",
    href: "https://www.codykit.id",
  },
  {
    image: "/codykit.png",
    text: "Lorem ipsum this is the second page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut!",
    href: "https://www.codykit.id",
  },
  {
    image: "/codykit.png",
    text: "Lorem ipsum this is the third page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sequi.",
    href: "https://www.codykit.id",
  },
  {
    image: "/codykit.png",
    text: "Lorem ipsum this is the fourth page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sequi.",
    href: "https://www.codykit.id",
  },
  {
    image: "/codykit.png",
    text: "Lorem ipsum this is the fifth page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sequi.",
    href: "https://www.codykit.id",
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
    width: 0
  });
 
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      setContainerHeight(secondRef.current?.getBoundingClientRect().height!);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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

    setContainerHeight(centerRef.current!.getBoundingClientRect().height);

    let nextIndex = getNextIndex();
    updateIndexes(nextIndex);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const [leftRef, centerRef, rightRef] = getSliders();

    leftRef.current!.className = `${styles.sliderContent}`;
    centerRef.current!.className = `${styles.sliderContent} ${styles.right}`;
    rightRef.current!.className = `${styles.sliderContent} ${styles.left}`;

    setContainerHeight(centerRef.current!.getBoundingClientRect().height);

    let prevIndex = getPrevIndex();
    updateIndexes(prevIndex);
    setCurrentIndex(prevIndex);
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
            <Image src={contents[firstIndex].image} width={1225} height={776} />
          </div>
          <div></div>
          <div className={styles.sliderInfo}>
            <p>{contents[firstIndex].text}</p>
          </div>
          <div className={styles.sliderButton}>
            <PrimaryButton
              text="Visit Project"
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
            />
          </div>
          <div></div>
          <div className={styles.sliderInfo}>
            <p>{contents[secondIndex].text}</p>
          </div>
          <div className={styles.sliderButton}>
            <PrimaryButton
              text="Visit Project"
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
            <Image src={contents[thirdIndex].image} width={1225} height={776} />
          </div>
          <div></div>
          <div className={styles.sliderInfo}>
            <p>{contents[thirdIndex].text}</p>
          </div>
          <div className={styles.sliderButton}>
            <PrimaryButton
              text="Visit Project"
              href={contents[thirdIndex].href}
            />
          </div>
        </div>
      </div>
      <div className={styles.navigationContainer}>
        <button onClick={handlePrev}>
          <Image src="/chevron-left.svg" width={15} height={26} />
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
              ></div>
            );
          })}
        </div>
        <button onClick={handleNext}>
          <Image src="/chevron-right.svg" width={15} height={26} />
        </button>
      </div>
    </>
  );
};

export default Slider;

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroComp.module.scss";

import bgUrl from "../assets/bg.png";
import lakeUrl from "../assets/02.png";
import houseUrl from "../assets/04.png";

export default function HeroComp() {
  const ref = useRef<HTMLElement | null>(null);

  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

 
  const yLake = useTransform(scrollYProgress, [0, 1], ["0vh", "-14vh"]);

  return (
    <section ref={ref} className={styles.scene}>
      
      <div
        className={`${styles.layer} ${styles.bg}`}
        style={{ backgroundImage: `url(${bgUrl})` }}
        aria-hidden
      />

      
      <div
        className={`${styles.layer} ${styles.house}`}
        style={{ backgroundImage: `url(${houseUrl})` }}
        role="img"
        aria-label="House on the lake"
      />

      
      <motion.div
        className={`${styles.layer} ${styles.lake}`}
        style={{ y: yLake, backgroundImage: `url(${lakeUrl})` }}
        aria-hidden
      />

      
      <div className={styles.moon} />
    </section>
  );
}

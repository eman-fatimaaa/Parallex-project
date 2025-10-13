import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroComp.module.scss";

import bg from "../assets/bg.png";
import lake from "../assets/02.png";
import house from "../assets/04.png";

export default function HeroComp() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yLake = useTransform(scrollYProgress, [0, 1], ["0vh", "-14vh"]);

  return (
    <section ref={ref} className={styles.scene}>
      <img src={bg} alt="mountains" className={`${styles.layer} ${styles.bg}`} />
      <img src={house} alt="house" className={`${styles.layer} ${styles.house}`} />
      <motion.img
        src={lake}
        alt="lake"
        className={`${styles.layer} ${styles.lake}`}
        style={{ y: yLake }}
      />
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Medieval Sharpness
      </motion.h1>
      <div className={styles.moon} />
    </section>
  );
}

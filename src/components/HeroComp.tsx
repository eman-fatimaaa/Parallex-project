import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroComp.module.scss";

import bg from "../assets/bg.png";
import lake from "../assets/02.png";
import house from "../assets/04.png";
import treeBranch from "../assets/06.png";
import nearMountainsLeft from "../assets/05.png";
import nearMountainsRight from "../assets/03.png";
import upCloseTrees from "../assets/treees.png";

export default function HeroComp() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const superSlowElement = useTransform(scrollY, [0, 5000], [0, -300]);

  return (
    <section ref={ref} className={styles.scene}>
      <img src={bg} alt="background mountains" className={`${styles.layer} ${styles.bg}`} />

      <img src={house} alt="house on the lake" className={`${styles.layer} ${styles.house}`} />

      <motion.img
        src={lake}
        alt="lake of the mountain"
        className={`${styles.layer} ${styles.lake}`}
      />

      <img src={treeBranch} alt="tree branch" className={`${styles.layer} ${styles.tree}`} />

      <img
        src={nearMountainsLeft}
        alt="left mountains"
        className={`${styles.layer} ${styles.nearMountainsLeft}`}
      />
      <img
        src={nearMountainsRight}
        alt="right mountains"
        className={`${styles.layer} ${styles.nearMountainsRight}`}
      />

      <img
        src={upCloseTrees}
        alt="up close trees"
        className={`${styles.layer} ${styles.upCloseTrees}`}
      />

      <motion.div
        className={styles.moonWrap}
        style={{ y: superSlowElement }}
      >
        <div className={styles.moon} />
      </motion.div>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
      >
        Medieval Sharpness
      </motion.h1>
    </section>
  );
}

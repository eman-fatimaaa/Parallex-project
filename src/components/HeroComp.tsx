import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroComp.module.scss";

import bg from "../assets/bg.png";
import lake from "../assets/02.png";
import house from "../assets/04.png";
import tree from "../assets/06.png";
import nearMountainsLeft from "../assets/05.png";
import nearMountainsRight from "../assets/03.png";
import upCloseTrees from "../assets/treees.png";

export default function HeroComp() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);
  const yMoon = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);
  const yNear = useTransform(scrollYProgress, [0, 1], ["0px", "-160px"]);
  const yLake = useTransform(scrollYProgress, [0, 1], ["0px", "-240px"]);
  const yHouse = useTransform(scrollYProgress, [0, 1], ["0px", "-320px"]);
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0px", "-360px"]);

  return (
    <section ref={ref} className={styles.scene}>
      <div className={styles.moonLight} />
      <motion.div style={{ y: yMoon }} className={styles.moon} />

      <motion.img style={{ y: yBg }} src={bg} className={styles.bg} alt="background mountains" />

      <motion.img style={{ y: yLake }} src={lake} className={styles.lake} alt="lake of the mountain" />
      <motion.img style={{ y: yHouse }} src={house} className={styles.house} alt="house on the lake" />

      <motion.h1
        style={{ y: yTitle }}
        initial={{ opacity: 0, y: -90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        className={styles.title}
      >
        Medieval Sharpness
      </motion.h1>

      <img src={tree} className={styles.tree} alt="tree branch" />
      <motion.img style={{ y: yNear }} src={nearMountainsLeft} className={styles.nearMountainsLeft} alt="left mountains" />
      <motion.img style={{ y: yNear }} src={nearMountainsRight} className={styles.nearMountainsRight} alt="right mountains" />
      <img src={upCloseTrees} className={styles.upCloseTrees} alt="up close trees" />
    </section>
  );
}

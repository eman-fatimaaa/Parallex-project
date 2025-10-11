import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroComp.module.scss";

import bgUrl from "../assets/bg.png";
import lakeUrl from "../assets/02.png";
import houseUrl from "../assets/04.png";

export default function HeroComp() {
  const ref = useRef<HTMLElement | null>(null);

  // Drive lake parallax with this section’s scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // 0 when section top hits top, 1 when bottom hits top
  });

  // Lake only: subtle upward slide (tweak the second value if you want more/less)
  const yLake = useTransform(scrollYProgress, [0, 1], ["0vh", "-14vh"]);

  return (
    <section ref={ref} className={styles.scene}>
      {/* FIXED background (full-bleed, never shows edges) */}
      <div
        className={`${styles.layer} ${styles.bg}`}
        style={{ backgroundImage: `url(${bgUrl})` }}
        aria-hidden
      />

      {/* FIXED house (left), sized to feel grounded above shoreline */}
      <div
        className={`${styles.layer} ${styles.house}`}
        style={{ backgroundImage: `url(${houseUrl})` }}
        role="img"
        aria-label="House on the lake"
      />

      {/* MOVING lake: fixed to viewport width & bottom, but y-transforms with scroll */}
      <motion.div
        className={`${styles.layer} ${styles.lake}`}
        style={{ y: yLake, backgroundImage: `url(${lakeUrl})` }}
        aria-hidden
      />

      {/* FIXED moon (keep glow in CSS) */}
      <div className={styles.moon} />
    </section>
  );
}

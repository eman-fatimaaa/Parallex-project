import styles from "./HeroComp.module.scss";
import bg from "../assets/bg.png";
import lake from "../assets/02.png"; 

export default function HeroComp() {
  return (
    <section className={styles.scene}>
      {/* background mountains */}
      <img src={bg} alt="background mountains" className={styles.bg} />

      {/* lake */}
      <img src={lake} alt="lake of the mountain" className={styles.lake} />

      {/* moon (kept with glow) */}
      <div className={styles.moon} />
    </section>
  );
}

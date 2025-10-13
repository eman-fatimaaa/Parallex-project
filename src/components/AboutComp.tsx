import styles from "./AboutComp.module.scss";
import woman from "../assets/woman.png";

export default function AboutComp() {
  return (
    <section className={styles.about}>
      <h2>Some Medieval</h2>
      <img src={woman} alt="japanese woman" className={styles.woman} />
      <div className={styles.redDot} />
    </section>
  );
}

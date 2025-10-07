import styles from "./HeroComp.module.scss";

export default function HeroComp() {
  return (
    <section className={styles.scene}>
      {/* This is the “moon” div the guide starts with */}
      <div className={styles.moon}></div>
      {/* background, lake, house, title, trees, mountains, etc. */}
    </section>
  );
}

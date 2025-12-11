"use client";

import styles from "../../styles/div.module.css";

export default function SectionDivider() {
  return (
    <section className={styles.divider}>
      <div className={styles.decorativeCircle}></div>
      <div className={styles.decorativeCircle}></div>
      <div className={styles.decorativeCircle}></div>
    </section>
  );
}

"use client";
import styles from "./ScrollUp.module.css";

export default function ScrollUp() {
  return (
    <article
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      title="Up"
      className={styles.scrollUp}
    >
      <span className={styles.scrollUp__arrow}>{">"}</span>
    </article>
  );
}

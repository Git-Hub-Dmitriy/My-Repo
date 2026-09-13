"use client";
import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(1);

  return (
    <div className={styles.counter}>
      <button
        onClick={() => {
          if (counter > 1) {
            setCounter(counter - 1);
          }
        }}
        className={styles.counter__minus}
      >
        -
      </button>
      <h2 className={styles.counter__number}>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className={styles.counter__plus}
      >
        +
      </button>
    </div>
  );
}

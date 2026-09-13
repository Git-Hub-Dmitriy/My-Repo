"use client";
import styles from "./Subscribe.module.css";
import { ComponentDict } from "@interfaces/dictionary.types";
import { useState } from "react";

interface PropsSubscribe {
  translate: ComponentDict<"subscribe">;
}

export default function Subscribe(props: PropsSubscribe) {
  const [input, setInput] = useState("");

  return (
    <section className={styles.subscribe}>
      <h1 className={styles.subscribe__title}>{props.translate.title}</h1>
      <h2 className={styles.subscribe__text}>{props.translate.text}</h2>
      <form className={styles.subscribe__form} action="">
        <input
          onChange={(e) => setInput(e.target.value)}
          className={styles.subscribe__input}
          type="email"
          name="email"
          value={input}
          placeholder={props.translate.placeholder}
        />
        <button className={styles.subscribe__button}>
          {props.translate.button}
        </button>
      </form>
    </section>
  );
}

"use client";
import styles from "./FormRegister.module.css";
import { PageDict } from "@interfaces/dictionary.types";
import Link from "next/link";

interface PropsFormRegister {
  dict: PageDict<"auth">["register"];
}

export default function FormRegister(props: PropsFormRegister) {
  return (
    <form className={styles.register}>
      <h1 className={styles.register__title}>{props.dict.title}</h1>
      <div className={styles.register__wrapper}>
        <div className={styles.register__innerInput}>
          <h2 className={styles.register__subtitle}>{props.dict.email}</h2>
          <input
            autoComplete="off"
            className={styles.register__input}
            required
            type="email"
            name="email"
          />
        </div>
        <h2 className={styles.register__text}>
          {props.dict.text}{" "}
          <Link className={styles.register__linkPolicy} href={"privacyPolicy"}>
            {props.dict.linkPolicy}
          </Link>
        </h2>
        <button className={styles.register__btn}>{props.dict.btn}</button>
      </div>
    </form>
  );
}

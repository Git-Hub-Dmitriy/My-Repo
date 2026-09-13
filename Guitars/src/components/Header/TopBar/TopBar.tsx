import styles from "./TopBar.module.css";
import Link from "next/link";
import { ComponentDict } from "@interfaces/dictionary.types";

interface PropsTopBar {
  dictionary: ComponentDict<"header">;
}

export default function TopBar(props: PropsTopBar) {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBar__column_left}>
        <h2 className={styles.topBar__text}>
          {props.dictionary.topBar.welcome}
        </h2>
        <div className={styles.topBar__separator}></div>
        <h2 className={styles.topBar__text}>{props.dictionary.topBar.tel}</h2>
      </div>
      <div className={styles.topBar__column_right}>
        <Link href={"auth"} className={styles.topBar__text}>
          {props.dictionary.topBar.textAccount}
        </Link>
        <div className={styles.topBar__separator}></div>
        <Link href={"contact"} className={styles.topBar__text}>
          {props.dictionary.topBar.textContact}
        </Link>
      </div>
    </div>
  );
}

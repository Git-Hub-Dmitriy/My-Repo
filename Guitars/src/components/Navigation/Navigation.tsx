import styles from "./Navigation.module.css";
import Link from "next/link";
import { ComponentDict } from "@interfaces/dictionary.types";
interface PropsNavigation {
  dict: ComponentDict<"navigation">;
}

export default function Navigation(props: PropsNavigation) {
  return (
    <section className={styles.navigation}>
      <h1 className={styles.navigation__title}>{props.dict.account.title}</h1>
      <div className={styles.navigation__innerLink}>
        <Link href={"/"} className={styles.navigation__link}>
          {props.dict.account.link}
        </Link>
        <span className={styles.navigation__arrow}> » </span>
        <h2 className={styles.navigation__subtitle}>
          {props.dict.account.subtitle}
        </h2>
      </div>
    </section>
  );
}

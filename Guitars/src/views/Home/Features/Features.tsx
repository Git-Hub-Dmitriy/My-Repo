import styles from "./Features.module.css";
import { PageDict } from "@interfaces/dictionary.types";

interface PorpsFeatures {
  translate: PageDict<"home">["features"];
}

export default function Features(props: PorpsFeatures) {
  return (
    <section className={styles.features}>
      {props.translate.map((item, index) => (
        <h2 key={index} className={styles.features__title}>
          {item}
        </h2>
      ))}
    </section>
  );
}

import styles from "./Bestseller.module.css";
import { PageDict } from "@interfaces/dictionary.types";

interface PropsBestseller {
  dict: PageDict<"home">["bestseller"];
}

export default function Bestseller(props: PropsBestseller) {
  return (
    <section className={styles.bestseller}>
      {props.dict.map((item) => (
        <div
          style={{ backgroundImage: `url(${item.url})` }}
          className={styles.bestseller__item}
          key={item.id}
        >
          <h2 className={styles.bestseller__title}>{item.title}</h2>
          <h2 className={styles.bestseller__subtitle}>{item.text}</h2>
        </div>
      ))}
    </section>
  );
}

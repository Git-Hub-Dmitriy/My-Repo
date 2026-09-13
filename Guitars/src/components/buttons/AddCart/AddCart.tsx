import styles from "./AddCart.module.css";
import IconBag from "@icons/bag.svg";
import { ComponentDict } from "@interfaces/dictionary.types";

interface PropsAddCart {
  product: string;
  variant: "addCart_primary" | "addCart_secondary";
  dict: ComponentDict<"buttons">["btnAddCart"];
}

export default function AddCart(props: PropsAddCart) {
  return (
    <article className={`${styles.addCart} ${styles[props.variant]}`}>
      <IconBag className={styles.addCart__icon} />
      <h2 className={styles.addCart__text}>{props.dict}</h2>
    </article>
  );
}

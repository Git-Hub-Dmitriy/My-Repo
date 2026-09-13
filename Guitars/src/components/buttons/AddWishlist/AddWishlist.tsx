import styles from "./AddWishlist.module.css";
import IconHeart from "@icons/iconHeart.svg";

interface PropsAddWishlist {
  variant: "addWishlist_primary" | "addWishlist_secondary";
}

export default function AddWishlist(props: PropsAddWishlist) {
  return (
    <article className={`${styles.addWishlist} ${styles[props.variant]}`}>
      <IconHeart className={styles.addWishlist__icon} />
    </article>
  );
}

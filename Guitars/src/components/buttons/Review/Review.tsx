import styles from "./Review.module.css";
import IconSearch from "@icons/iconSearch.svg";

export default function Review() {
  return (
    <article className={styles.review}>
      <IconSearch className={styles.review__icon} />
    </article>
  );
}

import styles from "./Rating.module.css";
import IconStar from "@icons/iconStar.svg";
import classNames from "classnames";

interface PropsRating {
  rating: number;
}

export default function Rating(props: PropsRating) {
  return (
    <div className={styles.rating}>
      <IconStar
        className={classNames(
          styles.rating__icon,
          props.rating === 5 && styles.rating__icon_white,
        )}
      />
      <IconStar
        className={classNames(
          styles.rating__icon,
          props.rating >= 4 && styles.rating__icon_white,
        )}
      />
      <IconStar
        className={classNames(
          styles.rating__icon,
          props.rating >= 3 && styles.rating__icon_white,
        )}
      />
      <IconStar
        className={classNames(
          styles.rating__icon,
          props.rating >= 2 && styles.rating__icon_white,
        )}
      />
      <IconStar
        className={classNames(
          styles.rating__icon,
          props.rating >= 1 && styles.rating__icon_white,
        )}
      />
    </div>
  );
}

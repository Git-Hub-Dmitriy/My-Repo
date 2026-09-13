import { PageDict } from "@interfaces/dictionary.types";
import styles from "./AboutDescription.module.css";
import Image from "next/image";

interface PropsAboutDescription {
  translate: PageDict<"about">;
}

export default function AboutDescription(props: PropsAboutDescription) {
  return (
    <section className={styles.aboutDescription}>
      <h1 className={styles.aboutDescription__title}>
        {props.translate.description.title}
      </h1>
      <h2 className={styles.aboutDescription__subtitle}>
        {props.translate.description.subtitle}
      </h2>
      <p className={styles.aboutDescription__text}>
        {props.translate.description.description}
      </p>
      <Image
        className={styles.aboutDescription__image}
        src={props.translate.description.url}
        alt="about image"
        width={800}
        height={500}
        priority
      />
    </section>
  );
}

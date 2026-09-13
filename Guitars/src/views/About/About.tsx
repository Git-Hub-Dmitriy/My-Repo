import styles from "./About.module.css";
import { Dictionary, PageDict } from "@interfaces/dictionary.types";
import Navigate from "@components/Navigate/Navigate";
import Image from "next/image";

interface PropsAbout {
  dict: Dictionary;
}

export default function About(props: PropsAbout) {
  const about: PageDict<"about"> = props.dict.pages.about;

  return (
    <main className={styles.about}>
      <Navigate translate={props.dict.components.navigate} />
      <div className={styles.about__wrapper}>
        <section className={styles.about__description}>
          <h1 className={styles.about__descriptionTitle}>
            {about.description.title}
          </h1>
          <h2 className={styles.about__descriptionSubtitle}>
            {about.description.subtitle}
          </h2>
          <p className={styles.about__descriptionText}>
            {about.description.description}
          </p>
          <Image
            className={styles.about__descriptionImage}
            src={about.description.url}
            alt="about image"
            width={800}
            height={500}
            priority
          />
        </section>
        <section className={styles.about__services}></section>
        <section className={styles.about__team}></section>
      </div>
    </main>
  );
}

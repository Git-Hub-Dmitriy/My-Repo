import { PageDict } from "@interfaces/dictionary.types";
import styles from "./AboutTeam.module.css";

interface PropsAboutTeam {
  translate: PageDict<"about">;
}

export default function AboutTeam(props: PropsAboutTeam) {
  return (
    <section className={styles.aboutTeam}>
      <h1 className={styles.aboutTeam__title}>{props.translate.team.title}</h1>
    </section>
  );
}

import styles from "./About.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsAbout {
  dict: Dictionary;
}

export default function About(props: PropsAbout) {
  return <main className={styles.about}></main>;
}

import styles from "./About.module.css";
import { Dictionary, PageDict } from "@interfaces/dictionary.types";
import Navigate from "@components/Navigate/Navigate";
import AboutDescription from "./AboutDescription/AboutDescription";
import AboutServices from "./AboutServices/AboutServices";
import AboutTeam from "./AboutTeam/AboutTeam";

interface PropsAbout {
  dict: Dictionary;
}

export default function About(props: PropsAbout) {
  const about: PageDict<"about"> = props.dict.pages.about;

  return (
    <main className={styles.about}>
      <Navigate translate={props.dict.components.navigate} />
      <div className={styles.about__wrapper}>
        <AboutDescription translate={about} />
        <AboutServices translate={about} />
        <AboutTeam translate={about} />
      </div>
    </main>
  );
}

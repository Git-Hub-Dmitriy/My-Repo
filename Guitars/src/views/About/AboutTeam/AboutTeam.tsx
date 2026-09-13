import { PageDict } from "@interfaces/dictionary.types";
import styles from "./AboutTeam.module.css";
import Image from "next/image";
interface PropsAboutTeam {
  translate: PageDict<"about">;
}

export default function AboutTeam(props: PropsAboutTeam) {
  return (
    <section className={styles.aboutTeam}>
      <h1 className={styles.aboutTeam__title}>{props.translate.team.title}</h1>
      <div className={styles.aboutTeam__wrapper}>
        {props.translate.team.list.map((person, index) => (
          <div key={index} className={styles.aboutTeam__box}>
            <Image
              className={styles.aboutTeam__image}
              src={person.url}
              alt="Image Team"
              width={900}
              height={1200}
            />
            <div className={styles.aboutTeam__info}>
              <h2 className={styles.aboutTeam__name}>{person.name}</h2>
              <h2 className={styles.aboutTeam__position}>{person.position}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

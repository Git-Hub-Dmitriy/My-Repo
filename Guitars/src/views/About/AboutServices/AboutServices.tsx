import { PageDict } from "@interfaces/dictionary.types";
import styles from "./AboutServices.module.css";
import Image from "next/image";

interface PropsAboutServices {
  translate: PageDict<"about">;
}

export default function AboutServices(props: PropsAboutServices) {
  return (
    <section className={styles.aboutServices}>
      <h1 className={styles.aboutServices__title}>
        {props.translate.service.title}
      </h1>
      {props.translate.service.list.map((service, index) => (
        <div key={index} className={styles.aboutServices__service}>
          <Image
            className={styles.aboutServices__icon}
            alt="icon"
            width={40}
            height={40}
            src={service.url}
          />
          <h2 className={styles.aboutServices__subtitle}>{service.title}</h2>
          <h2 className={styles.aboutServices__description}>
            {service.description}
          </h2>
        </div>
      ))}
    </section>
  );
}

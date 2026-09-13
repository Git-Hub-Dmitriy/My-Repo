import { PageDict } from "@interfaces/dictionary.types";
import styles from "./Banner.module.css";
import Carousel from "@components/Carousel/Carousel";

interface PropsBanner {
  translate: PageDict<"home">["banners"];
}

export default async function Banner(props: PropsBanner) {
  return (
    <section className={styles.banner}>
      <Carousel slides={props.translate} />
    </section>
  );
}

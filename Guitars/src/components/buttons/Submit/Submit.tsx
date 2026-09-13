import { ComponentDict } from "@interfaces/dictionary.types";
import styles from "./Submit.module.css";

interface PropsSubmit {
  dict: ComponentDict<"buttons">["btnSubmit"];
}

export default function Submit(props: PropsSubmit) {
  return (
    <button form="formReview" className={styles.submit}>
      {props.dict}
    </button>
  );
}

import styles from "./Account.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsAccount {
  dict: Dictionary;
  slots: React.ReactNode;
}

export default function Account(props: PropsAccount) {
  return <main className={styles.account}>{props.slots}</main>;
}

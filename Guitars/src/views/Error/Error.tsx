import styles from "./Error.module.css";

interface PropsError {
  error: Error;
  reset: () => void;
}

export default function Error(props: PropsError) {
  return <main className={styles.error}></main>;
}

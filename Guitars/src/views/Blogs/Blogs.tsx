import styles from "./Blogs.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import { Suspense } from "react";
import Navigate from "@components/Navigate/Navigate";

interface PropsBlogs {
  dict: Dictionary;
}

export default function Blogs(props: PropsBlogs) {
  return (
    <main className={styles.blogs}>
      <Navigate translate={props.dict.components.navigate} />
    </main>
  );
}

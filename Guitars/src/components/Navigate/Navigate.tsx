"use client";
import { usePathname } from "next/navigation";
import styles from "./Navigate.module.css";
import { ComponentDict } from "@interfaces/dictionary.types";

interface PropsNavigate {
  translate: ComponentDict<"navigate">;
}

export default function Navigate(props: PropsNavigate) {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean);
  const currentSegment = segment[1] || "";
  const title = props.translate.find((path) =>
    path.page.includes(currentSegment),
  );

  return (
    <section className={styles.navigate}>
      <h1 className={styles.navigate__title}>{title?.title}</h1>
    </section>
  );
}

"use client";
import styles from "./OurProducts.module.css";
import { PageDict } from "@interfaces/dictionary.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
interface PropsOurProducts {
  dict: PageDict<"home">["ourProduct"];
  product: React.ReactNode;
  locale: string;
}

export default function OurProducts(props: PropsOurProducts) {
  const pathname = usePathname();
  const routes = props.dict.routes;
  const title = props.dict.title;

  return (
    <section className={styles.ourProducts}>
      <h1 className={styles.ourProducts__title}>{title}</h1>
      <nav className={styles.ourProducts__menu}>
        {routes.map((item, i) => {
          const isActive =
            item.href === "Featured"
              ? pathname === `/${props.locale}`
              : pathname.endsWith(item.href.toLowerCase());

          return (
            <Link
              href={
                item.href === "Featured"
                  ? `/${props.locale}`
                  : item.href.toLowerCase()
              }
              key={i}
              className={classNames(
                styles.ourProducts__route,
                isActive && styles.ourProducts__route_active,
              )}
            >
              {item.route}
            </Link>
          );
        })}
      </nav>
      <>{props.product}</>
    </section>
  );
}

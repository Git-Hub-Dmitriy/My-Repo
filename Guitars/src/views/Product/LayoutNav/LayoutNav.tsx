"use client";
import classNames from "classnames";
import styles from "./LayoutNav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageDict } from "@interfaces/dictionary.types";

interface PropsLayoutNav {
  sku: string;
  locale: string;
  dict: PageDict<"product">;
}

export default function LayoutNav(props: PropsLayoutNav) {
  const pathname = usePathname();
  const basePath = `/${props.locale}/shop/${props.sku}`;
  const isActive = (segment: string) => {
    const fullPath = `${basePath}/${segment}`;
    if (pathname === basePath && segment === "description") {
      return true;
    }
    return pathname === fullPath;
  };

  return (
    <section className={styles.layoutNav}>
      <nav className={styles.layoutNav__routes}>
        <Link
          className={classNames(
            styles.layoutNav__link,
            isActive("description") && styles.layoutNav__link_active,
          )}
          href={`${basePath}/description`}
        >
          {props.dict.routes.description}
        </Link>
        <Link
          className={classNames(
            styles.layoutNav__link,
            isActive("information") && styles.layoutNav__link_active,
          )}
          href={`${basePath}/information`}
        >
          {props.dict.routes.information.routeName}
        </Link>
        <Link
          className={classNames(
            styles.layoutNav__link,
            isActive("reviews") && styles.layoutNav__link_active,
          )}
          href={`${basePath}/reviews`}
        >
          {props.dict.routes.reviews.reviewName}
        </Link>
      </nav>
      <div className={styles.layoutNav__line}></div>
    </section>
  );
}

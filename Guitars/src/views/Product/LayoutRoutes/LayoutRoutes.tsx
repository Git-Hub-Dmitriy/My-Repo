"use client";
import classNames from "classnames";
import styles from "./LayoutRoutes.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageDict } from "@interfaces/dictionary.types";

interface PropsLayoutRoutes {
  routes: React.ReactNode;
  sku: string;
  locale: string;
  dict: PageDict<"product">;
}

export default function LayoutRoutes(props: PropsLayoutRoutes) {
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
    <section className={styles.layoutRoutes}>
      <nav className={styles.layoutRoutes__routes}>
        <Link
          className={classNames(
            styles.layoutRoutes__link,
            isActive("description") && styles.layoutRoutes__link_active,
          )}
          href={`${basePath}/description`}
        >
          {props.dict.routes.description}
        </Link>
        <Link
          className={classNames(
            styles.layoutRoutes__link,
            isActive("information") && styles.layoutRoutes__link_active,
          )}
          href={`${basePath}/information`}
        >
          {props.dict.routes.information.routeName}
        </Link>
        <Link
          className={classNames(
            styles.layoutRoutes__link,
            isActive("reviews") && styles.layoutRoutes__link_active,
          )}
          href={`${basePath}/reviews`}
        >
          {props.dict.routes.reviews.reviewName}
        </Link>
      </nav>
      <div className={styles.layoutRoutes__line}></div>
      {props.routes}
    </section>
  );
}

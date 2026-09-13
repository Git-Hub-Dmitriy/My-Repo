import styles from "./NavigateProduct.module.css";
import getProduct from "@services/internal/getProduct";
import { notFound } from "next/navigation";

interface PropsNavigateProduct {
  sku: string;
  locale: string;
}

export default async function Navigate(props: PropsNavigateProduct) {
  const product = await getProduct({
    sku: props.sku,
    locale: props.locale,
  });

  if (!product) {
    return notFound();
  }

  return (
    <section className={styles.navigateProduct}>
      <h1 className={styles.navigateProduct__title}>
        {product.translation.name}
      </h1>
    </section>
  );
}

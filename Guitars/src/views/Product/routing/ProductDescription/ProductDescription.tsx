import styles from "./ProductDescription.module.css";
import getProduct from "@services/internal/getProduct";

interface PropsProductDescription {
  sku: string;
  locale: string;
}

export default async function ProductDescription(
  props: PropsProductDescription,
) {
  const product = await getProduct({
    sku: props.sku,
    locale: props.locale,
  });

  return (
    <section className={styles.productDescription}>
      <h1 className={styles.productDescription__title}>
        {product?.translation.subtitle}
      </h1>
      <h2 className={styles.productDescription__description}>
        {product?.translation.description}
      </h2>
      <h1 className={styles.productDescription__title}>
        {product?.translation.subtitleTwo}
      </h1>
      <h2 className={styles.productDescription__description}>
        {product?.translation.descriptionTwo}
      </h2>
    </section>
  );
}

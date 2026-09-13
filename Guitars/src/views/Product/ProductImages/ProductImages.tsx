import styles from "./ProductImages.module.css";
import Image from "next/image";
import getProduct from "@services/internal/getProduct";
import { notFound } from "next/navigation";

type PropsProductImages = {
  sku: string;
  locale: string;
};

export default async function ProductImages(props: PropsProductImages) {
  const product = await getProduct({
    sku: props.sku,
    locale: props.locale,
  });

  if (!product) {
    return notFound();
  }

  return (
    <section className={styles.productImages}>
      <div className={styles.productImages__wrapImage}>
        <Image
          className={styles.productImages__image}
          src={product.image}
          alt="Product"
          width={500}
          height={600}
          priority
        />
      </div>
    </section>
  );
}

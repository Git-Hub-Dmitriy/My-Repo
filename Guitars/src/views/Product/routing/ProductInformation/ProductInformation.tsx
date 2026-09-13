import styles from "./ProductInformation.module.css";
import getProduct from "@services/internal/getProduct";
import { PageDict } from "@interfaces/dictionary.types";

interface PropsProductInformation {
  sku: string;
  dict: PageDict<"product">;
  locale: string;
}

export default async function ProductInformation(
  props: PropsProductInformation,
) {
  const product = await getProduct({
    sku: props.sku,
    locale: props.locale,
  });

  return (
    <section className={styles.productInfromation}>
      <h2 className={styles.productInfromation__color}>
        {props.dict.routes.information.color}
      </h2>
      <div className={styles.productInfromation__colors}>
        {product?.translation.color.map((item) => item).join(", ")}
      </div>
    </section>
  );
}

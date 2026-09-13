import styles from "./BuyBox.module.css";
import AddCart from "@components/buttons/AddCart/AddCart";
import AddWishlist from "@components/buttons/AddWishlist/AddWishlist";
import { Dictionary } from "@interfaces/dictionary.types";
import getProduct from "@services/internal/getProduct";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Rating from "@components/Rating/Rating";
const Counter = dynamic(() => import("./Counter/Counter"));

interface PropsBuyBox {
  dict: Dictionary;
  sku: string;
  locale: string;
}

export default async function BuyBox(props: PropsBuyBox) {
  const product = await getProduct({
    sku: props.sku,
    reviews: true,
    categories: true,
    locale: props.locale,
  });

  if (!product) {
    return notFound();
  }

  const averageRating: number = Math.trunc(
    product.reviews.reduce((acum, item) => acum + item.rating, 0) /
      product.reviews.length,
  );

  const categories = product.categories
    .map((item) => item.category.name)
    .join(", ");

  return (
    <section className={styles.buyBox}>
      <div className={styles.buyBox__wrapTitle}>
        <h1 className={styles.buyBox__title}>{product.translation.name}</h1>
        <Rating rating={averageRating} />
        <span className={styles.buyBox__reviewLength}>
          {product.reviews.length} Reviews
        </span>
      </div>
      <h2 className={styles.buyBox__price}>{`$${product.price}`}</h2>
      <h2 className={styles.buyBox__subtitle}>{product.translation.title}</h2>
      <div className={styles.buyBox__wapQuanity}>
        <h2 className={styles.buyBox__quanity}>
          {props.dict.pages.product.quanity}
        </h2>
        <div className={styles.buyBox__innerQuanity}>
          <Counter />
          <AddCart
            dict={props.dict.components.buttons.btnAddCart}
            variant="addCart_secondary"
            product={product.sku}
          />
        </div>
        <AddWishlist variant="addWishlist_secondary" />
        <div className={styles.buyBox__innerCategories}>
          <div className={styles.buyBox__innerSku}>
            <b
              className={styles.buyBox__skuName}
            >{`${props.dict.pages.product.sku} `}</b>
            <h2 className={styles.buyBox__sku}>{product.sku}</h2>
          </div>
          <div className={styles.buyBox__categories}>
            <h2 className={styles.buyBox__category}>
              <b
                className={styles.buyBox__CategoryName}
              >{`${props.dict.pages.product.category} `}</b>
              {categories}
            </h2>
          </div>
        </div>
        <div className={styles.buyBox__innerTags}>
          <b
            className={styles.buyBox__tagName}
          >{`${props.dict.pages.product.tags} `}</b>
          <h2 className={styles.buyBox__tag}>
            {product.translation.tags.map((item) => item).join(", ")}
          </h2>
        </div>
      </div>
    </section>
  );
}

import styles from "./ProductReviews.module.css";
import getProduct from "@services/internal/getProduct";
import { ComponentDict, PageDict } from "@interfaces/dictionary.types";
import Rating from "@components/Rating/Rating";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const FormReview = dynamic(() => import("./FormReview/FormReview"));

interface PropsProductReviews {
  sku: string;
  locale: string;
  dict: PageDict<"product">["routes"]["reviews"];
  dictComponent: ComponentDict<"buttons">["btnSubmit"];
}

export default async function ProductReviews(props: PropsProductReviews) {
  const product = await getProduct({
    sku: props.sku,
    locale: props.locale,
    reviews: true,
  });

  if (!product) {
    return notFound();
  }

  const ratingAverage = Math.round(
    product.reviews.reduce((acum, item) => acum + item.rating, 0) /
      product.reviews.length,
  );

  return (
    <section className={styles.productReviews}>
      <h1 className={styles.productReviews__title}>{props.dict.reviewName}</h1>
      <h2 className={styles.productReviews__text}>
        {product.reviews.length > 0
          ? `Reviews amount: ${product.reviews.length}`
          : props.dict.reviewLengthZero}
      </h2>
      <h1 className={styles.productReviews__subtitle}>{props.dict.title}</h1>
      <h2 className={styles.productReviews__warning}>{props.dict.warning}</h2>
      <div className={styles.productReviews__innerRating}>
        <h1 className={styles.productReviews__rating}>
          {props.dict.ratingText}
        </h1>
        <Rating rating={ratingAverage} />
      </div>
      <FormReview dict={props.dict} dictComponent={props.dictComponent} />
    </section>
  );
}

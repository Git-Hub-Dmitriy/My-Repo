import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import AddCart from "@components/buttons/AddCart/AddCart";
import AddWishlist from "@components/buttons/AddWishlist/AddWishlist";
import Review from "@components/buttons/Review/Review";
import { ComponentDict } from "@interfaces/dictionary.types";
import type { Product, ProductTranslation } from "@generated/prisma/client";

type ProductBase = Omit<Product, "price" | "oldPrice"> & {
  price: number;
  oldPrice: number | null;
};
type TranslationsData = Omit<ProductTranslation, "id" | "locale">;
type FlattenedProduct = ProductBase & TranslationsData;

interface PropsCard {
  item: FlattenedProduct;
  dict: ComponentDict<"buttons">["btnAddCart"];
}

export default function Card(props: PropsCard) {
  return (
    <article className={styles.card}>
      <Link className={styles.card__link} href={`shop/${props.item.sku}`}>
        <Image
          className={styles.card__image}
          src={props.item.image}
          alt={props.item.name}
          width={160}
          height={210}
        />
        <div className={styles.card__wrapTitle}>
          <h1 className={styles.card__title}>{props.item.name}</h1>
          <h2
            className={styles.card__price}
          >{`$${Number(props.item.price)}.00`}</h2>
        </div>
      </Link>
      <div className={styles.card__wrapBtnCard}>
        <AddCart
          dict={props.dict}
          variant="addCart_primary"
          product={props.item.sku}
        />
      </div>
      <AddWishlist variant="addWishlist_primary" />
      <Review />
    </article>
  );
}

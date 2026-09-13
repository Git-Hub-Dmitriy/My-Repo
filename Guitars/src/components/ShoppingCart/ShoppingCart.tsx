"use client";
import styles from "./ShoppingCart.module.css";
import IconCart from "@icons/bag.svg";
import storeCart from "@store/stateCart";
import Link from "next/link";

export default function ShoppingCart() {
  const { cart } = storeCart();

  return (
    <Link href={"/shopping-cart"} className={styles.shoppingCart}>
      <div className={styles.shoppingCart__wrapper}>
        <IconCart className={styles.shoppingCart__icon} />
        <div className={styles.shoppingCart__innerCounter}>
          <h2 className={styles.shoppingCart__counter}>{cart?.length}</h2>
        </div>
      </div>
    </Link>
  );
}

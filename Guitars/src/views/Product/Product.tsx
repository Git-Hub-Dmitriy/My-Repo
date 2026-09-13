import styles from "./Product.module.css";
import NavigateProduct from "@views/Product/NavigateProduct/NavigateProduct";
import ProductImages from "./ProductImages/ProductImages";
import { Dictionary } from "@interfaces/dictionary.types";
import LayoutNav from "./LayoutNav/LayoutNav";
import BuyBox from "./BuyBox/BuyBox";
import { Suspense } from "react";
import SkeletonNavigateProduct from "@views/Product/NavigateProduct/SkeletonNavigateProduct/SkeletonNavigateProduct";
import SkeletonProductImages from "./ProductImages/SkeletonProductImages/SkeletonProductImages";
import SkeletonBuyBox from "./BuyBox/SkeletonBuyBox/SkeletonBuyBox";
import SkeletonLayoutNav from "./LayoutNav/SkeletonLayoutNav/SkeletonLayoutNav";

interface PropsProduct {
  locale: string;
  sku: string;
  routes: React.ReactNode;
  translate: Dictionary;
}

export default function Product(props: PropsProduct) {
  return (
    <main className={styles.product}>
      <Suspense fallback={<SkeletonNavigateProduct />}>
        <NavigateProduct locale={props.locale} sku={props.sku} />
      </Suspense>
      <div className={styles.product__wrapper}>
        <div className={styles.product__container}>
          <Suspense fallback={<SkeletonProductImages />}>
            <ProductImages locale={props.locale} sku={props.sku} />
          </Suspense>
          <Suspense fallback={<SkeletonBuyBox />}>
            <BuyBox
              sku={props.sku}
              translate={props.translate}
              locale={props.locale}
            />
          </Suspense>
        </div>
        <div className={styles.product__container}>
          <Suspense fallback={<SkeletonLayoutNav />}>
            <LayoutNav
              sku={props.sku}
              locale={props.locale}
              dict={props.translate.pages.product}
            />
          </Suspense>
          {props.routes}
        </div>
      </div>
    </main>
  );
}

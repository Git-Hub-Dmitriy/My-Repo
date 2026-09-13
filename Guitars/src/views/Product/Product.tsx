import styles from "./Product.module.css";
import NavigateProduct from "@views/Product/NavigateProduct/NavigateProduct";
import ProductImages from "./ProductImages/ProductImages";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import dynamic from "next/dynamic";
const LayoutRoutes = dynamic(() => import("./LayoutRoutes/LayoutRoutes"));
import BuyBox from "./BuyBox/BuyBox";
import { Suspense } from "react";
import SkeletonNavigateProduct from "@views/Product/NavigateProduct/SkeletonNavigateProduct/SkeletonNavigateProduct";
import SkeletonProductImages from "./ProductImages/SkeletonProductImages/SkeletonProductImages";
import SkeletonBuyBox from "./BuyBox/SkeletonBuyBox/SkeletonBuyBox";

export default async function Product({
  params,
  routes,
}: {
  params: Promise<{ locale: string; sku: string }>;
  routes: React.ReactNode;
}) {
  const { locale, sku } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <main className={styles.product}>
      <Suspense fallback={<SkeletonNavigateProduct />}>
        <NavigateProduct locale={locale} sku={sku} />
      </Suspense>
      <div className={styles.product__wrapper}>
        <div className={styles.product__container}>
          <Suspense fallback={<SkeletonProductImages />}>
            <ProductImages locale={locale} sku={sku} />
          </Suspense>
          <Suspense fallback={<SkeletonBuyBox />}>
            <BuyBox sku={sku} dict={dict} locale={locale} />
          </Suspense>
        </div>
        <LayoutRoutes
          routes={routes}
          sku={sku}
          locale={locale}
          dict={dict.pages.product}
        />
      </div>
    </main>
  );
}

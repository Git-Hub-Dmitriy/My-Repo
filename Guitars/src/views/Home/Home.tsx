import styles from "./Home.module.css";
import { Suspense } from "react";
import Features from "./Features/Features";
import Banner from "./Banner/Banner";
import { Dictionary } from "@interfaces/dictionary.types";
import OurProducts from "./OurProducts/OurProducts";
import Bestseller from "./Bestseller/Bestseller";
import LatestDynamic from "./LatestNews/LatestDynamic";
import SkeletonLatestNews from "./LatestNews/SkeletonLatestNews/SkeletonLatestNews";
import Testimonials from "./Testimonials/Testimonials";
import Brands from "./Brands/Brands";
import Subscribe from "@components/forms/Subscribe/Subscribe";
interface PropsHome {
  translate: Dictionary;
  product: React.ReactNode;
  locale: string;
}

export default function Home(props: PropsHome) {
  return (
    <main className={styles.home}>
      <Banner translate={props.translate.pages.home.banners} />
      <Features translate={props.translate.pages.home.features} />
      <Bestseller translate={props.translate.pages.home.bestseller} />
      <OurProducts
        translate={props.translate.pages.home.ourProduct}
        product={props.product}
        locale={props.locale}
      />
      <Testimonials translate={props.translate.pages.home.testimonials} />
      <Brands />
      <Suspense fallback={<SkeletonLatestNews />}>
        <LatestDynamic
          locale={props.locale}
          translate={props.translate.pages.home.latestNews}
        />
      </Suspense>
      <Subscribe translate={props.translate.components.subscribe} />
    </main>
  );
}

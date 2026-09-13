import styles from "./Home.module.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Features from "./Features/Features";
import Banner from "./Banner/Banner";
import { Dictionary } from "@interfaces/dictionary.types";
import OurProducts from "./OurProducts/OurProducts";
import Bestseller from "./Bestseller/Bestseller";
import LatestDynamic from "./LatestNews/LatestDynamic";
import SkeletonLatestNews from "./LatestNews/SkeletonLatestNews/SkeletonLatestNews";
const Testimonials = dynamic(() => import("./Testimonials/Testimonials"));
const Brands = dynamic(() => import("./Brands/Brands"));
const Subscribe = dynamic(
  () => import("@components/forms/Subscribe/Subscribe"),
);
interface PropsHome {
  dict: Dictionary;
  product: React.ReactNode;
  locale: string;
}

export default function Home(props: PropsHome) {
  return (
    <main className={styles.home}>
      <Banner />
      <Features dictionary={props.dict.pages.home.features} />
      <Bestseller dict={props.dict.pages.home.bestseller} />
      <OurProducts
        dict={props.dict.pages.home.ourProduct}
        product={props.product}
        locale={props.locale}
      />
      <Testimonials dict={props.dict.pages.home.testimonials} />
      <Brands />
      <Suspense fallback={<SkeletonLatestNews />}>
        <LatestDynamic
          locale={props.locale}
          dict={props.dict.pages.home.latestNews}
        />
      </Suspense>
      <Subscribe dict={props.dict.components.subscribe} />
    </main>
  );
}

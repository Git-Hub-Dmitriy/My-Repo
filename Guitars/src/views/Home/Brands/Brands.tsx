"use client";
import styles from "./Brands.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { brandsImages } from "@data/brandsImages";
import Image from "next/image";

export default function Brands() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <section className={styles.brands}>
      <div className={styles.brands__viewport} ref={emblaRef}>
        <div className={styles.brands__container}>
          {brandsImages.map((slide) => (
            <div className={styles.brands__slide} key={slide.id}>
              <Image
                className={styles.brands__image}
                src={slide.image}
                alt={"Brand Image"}
                priority={false}
                width={80}
                height={40}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

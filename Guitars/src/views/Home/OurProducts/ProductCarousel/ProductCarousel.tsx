"use client";
import styles from "./ProductCarousel.module.css";
import React, { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ProductCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const pathname = usePathname();

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();

    const viewport = emblaApi.rootNode();
    if (!viewport) return;

    const resize = new ResizeObserver(() => {
      emblaApi.reInit();
    });

    resize.observe(viewport);

    return () => {
      resize.disconnect();
    };
  }, [pathname, emblaApi]);

  return (
    <div className={styles.productCarousel__wrapper}>
      <div className={styles.productCarousel__viewport} ref={emblaRef}>
        <div className={styles.productCarousel__container}>
          {React.Children.map(children, (child) => (
            <div className={styles.productCarousel__slide}>{child}</div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.productCarousel__button} ${styles.productCarousel__prev}`}
        onClick={scrollPrev}
      >
        ‹
      </button>
      <button
        className={`${styles.productCarousel__button} ${styles.productCarousel__next}`}
        onClick={scrollNext}
      >
        ›
      </button>
    </div>
  );
}

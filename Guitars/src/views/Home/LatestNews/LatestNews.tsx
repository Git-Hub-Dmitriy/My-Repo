"use client";
import styles from "./LatestNews.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { PageDict } from "@interfaces/dictionary.types";
import getDateToString from "@utils/getDateToString";
import Link from "next/link";
import ReadMore from "@components/buttons/ReadMore/ReadMore";
import type { Post, PostTranslation } from "@generated/prisma/client";

type TranslationData = Omit<PostTranslation, "id" | "locale">;
type FlattenedPost = Post & TranslationData;

interface PropsLatestNews {
  blogs: FlattenedPost[];
  dict: PageDict<"home">["latestNews"];
}

export default function LatestNews(props: PropsLatestNews) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles.latestNews}>
      <h1 className={styles.latestNews__title}>{props.dict.title}</h1>
      <div className={styles.latestNews__viewport} ref={emblaRef}>
        <div className={styles.latestNews__container}>
          {props.blogs.map((slide, index) => (
            <Link
              href={`blog/${slide.id}`}
              className={styles.latestNews__slide}
              key={slide.id}
            >
              <Image
                className={styles.latestNews__image}
                src={slide.imageUrl}
                alt={"Slide image"}
                priority={index === 0}
                width={400}
                height={300}
              />
              <div className={styles.latestNews__wrapPost}>
                <h2 className={styles.latestNews__date}>
                  {getDateToString(slide?.createdAt)}
                </h2>
                <h2 className={styles.latestNews__postTitle}>{slide.title}</h2>
                <h2 className={styles.latestNews__description}>
                  {slide.description}
                </h2>
                <ReadMore />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button
        className={`${styles.latestNews__button} ${styles.latestNews__prev}`}
        onClick={scrollPrev}
      >
        ‹
      </button>
      <button
        className={`${styles.latestNews__button} ${styles.latestNews__next}`}
        onClick={scrollNext}
      >
        ›
      </button>
    </section>
  );
}

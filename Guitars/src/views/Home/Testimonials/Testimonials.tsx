"use client";
import styles from "./Testimonials.module.css";
import { PageDict } from "@interfaces/dictionary.types";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import IconQuote from "@icons/iconQuote.svg";
import Autoplay from "embla-carousel-autoplay";

interface PropsTestimonials {
  dict: PageDict<"home">["testimonials"];
}

export default function Testimonials(props: PropsTestimonials) {
  const testimonials = props.dict.slides;
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <section className={styles.testimonials}>
      <h1 className={styles.testimonials__title}>{props.dict.title}</h1>
      <div className={styles.testimonials__viewport} ref={emblaRef}>
        <div className={styles.testimonials__container}>
          {testimonials.map((slide, index) => (
            <div className={styles.testimonials__slide} key={slide.id}>
              <Image
                className={styles.testimonials__image}
                src={slide.image}
                alt={"Slide image"}
                priority={index === 0}
                width={100}
                height={100}
              />
              <IconQuote className={styles.testimonials__quote} />
              <h2 className={styles.testimonials__text}>{slide.text}</h2>
              <h2 className={styles.testimonials__name}>{slide.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

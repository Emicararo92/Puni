"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "../../../styles/hero.module.css";

type Slide = {
  type: "image" | "video";
  src: string;
  title: string;
  ctaText: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    type: "video",
    src: "https://res.cloudinary.com/dnyfmlnvt/video/upload/v1767984550/WhatsApp_Video_2026-01-07_at_21.40.58_nxrakg.mp4",
    title: "¿Querés ser repartidor?",
    ctaText: "Registrarme",
    ctaHref: "/forms/repartidores",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dnyfmlnvt/video/upload/v1767984549/WhatsApp_Video_2026-01-07_at_20.34.55_flyoss.mp4",
    title: "¿Necesitás envíos?",
    ctaText: "Más info",
    ctaHref: "/forms/envios",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dnyfmlnvt/video/upload/v1767389470/WhatsApp_Video_2025-12-26_at_10.12.27_i1rwdu.mp4",
    title: "¿Querés hablar con nosotros?",
    ctaText: "Contacto",
    ctaHref: "/forms/contacto",
  },
];

export default function HeroCarousel() {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        speed={1000}
        className={styles.hero__swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.hero__slide}>
              {slide.type === "video" ? (
                <video
                  className={styles.hero__image}
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={styles.hero__image}
                />
              )}

              <div className={styles.hero__content}>
                <h2 className={styles.hero__title}>{slide.title}</h2>
                <Link href={slide.ctaHref} className={styles.hero__button}>
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

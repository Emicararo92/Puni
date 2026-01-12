"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "../../../styles/hero.module.css";

type Slide = {
  title: string;
  ctaText: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    title: "¿Querés ser repartidor?",
    ctaText: "Registrarme",
    ctaHref: "/forms/repartidores",
  },
  {
    title: "¿Necesitás envíos?",
    ctaText: "Más info",
    ctaHref: "/forms/envios",
  },
  {
    title: "¿Querés hablar con nosotros?",
    ctaText: "Contacto",
    ctaHref: "/forms/contacto",
  },
];

const BACKGROUND_VIDEO =
  "https://res.cloudinary.com/dnyfmlnvt/video/upload/v1767389470/WhatsApp_Video_2025-12-26_at_10.12.27_i1rwdu.mp4";

export default function HeroCarousel() {
  return (
    <section className={styles.hero}>
      {/* VIDEO DE FONDO */}
      <video
        className={styles.backgroundVideo}
        src={BACKGROUND_VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
        loop
        speed={800}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.content}>
              <h2 className={styles.title}>{slide.title}</h2>

              <Link href={slide.ctaHref} className={styles.button}>
                {slide.ctaText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

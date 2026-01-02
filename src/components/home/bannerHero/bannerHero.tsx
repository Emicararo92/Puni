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
    src: "https://res.cloudinary.com/dnyfmlnvt/video/upload/v1767389470/WhatsApp_Video_2025-12-26_at_10.12.27_i1rwdu.mp4",
    title: "¿Querés ser repartidor?",
    ctaText: "Registrarme",
    ctaHref: "/registros/quieroserrepartidor",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765410221/Prompt_para_Canva_Banner_de_Quiero_Env%C3%ADos___Crea_un_banner_hero_para_el_sitio_de_Puni_dirigido_a_clientes_que_quieren_hacer_env%C3%ADos._Debe_incluir___Ilustraci%C3%B3n_o_imagen_de_un_paquete_o_paquete_en_movimiento_con_efecto_de_velocidad_f9joo2.jpg",
    title: "¿Necesitás envíos?",
    ctaText: "Más info",
    ctaHref: "/registros/quieroenvios",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765410221/Prompt_para_Canva_Banner_Por_qu%C3%A9_elegirnos___Crea_un_banner_hero_para_el_sitio_de_Puni_dirigido_a_mostrar_ventajas_o_motivos_de_elegir_el_servicio._Debe_incluir___Imagen_o_ilustraci%C3%B3n_de_confianza_y_profesionalismo_por_ejemplo__re_q9jh4h.jpg",
    title: "¿Querés hablar con nosotros?",
    ctaText: "Contacto",
    ctaHref: "/contacto",
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

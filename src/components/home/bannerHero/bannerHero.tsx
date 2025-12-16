"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "../../../styles/hero.module.css";

export default function HeroCarousel() {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className={styles.hero__swiper}
        speed={1000} // transición más suave
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className={styles.hero__slide}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765501949/Create_a_horizontal_banner._The_left_25_of_the_image_should_be_mostly_white_leaving_space_for_text_or_a_logo._Focus_the_scene_on_the_right_side._Show_a_delivery_rider_on_a_motorcycle_riding_through_an_urban_stree_j2vfpp.jpg"
              alt="Repartidor Puni"
              fill
              className={styles.hero__image}
            />
            <div className={styles.hero__content}>
              <h2 className={styles.hero__title}>¿Querés ser repartidor?</h2>
              <Link
                href="/registros/quieroserrepartidor"
                className={styles.hero__button}
              >
                Registrarme
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={styles.hero__slide}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765410221/Prompt_para_Canva_Banner_de_Quiero_Env%C3%ADos___Crea_un_banner_hero_para_el_sitio_de_Puni_dirigido_a_clientes_que_quieren_hacer_env%C3%ADos._Debe_incluir___Ilustraci%C3%B3n_o_imagen_de_un_paquete_o_paquete_en_movimiento_con_efecto_de_velocidad_f9joo2.jpg"
              alt="Servicios de envío"
              fill
              className={styles.hero__image}
            />
            <div className={styles.hero__content}>
              <h2 className={styles.hero__title}>¿Necesitás envíos?</h2>
              <Link
                href="/registros/quieroenvios"
                className={styles.hero__button}
              >
                Más info
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className={styles.hero__slide}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765410221/Prompt_para_Canva_Banner_Por_qu%C3%A9_elegirnos___Crea_un_banner_hero_para_el_sitio_de_Puni_dirigido_a_mostrar_ventajas_o_motivos_de_elegir_el_servicio._Debe_incluir___Imagen_o_ilustraci%C3%B3n_de_confianza_y_profesionalismo_por_ejemplo__re_q9jh4h.jpg"
              alt="Contacto Puni"
              fill
              className={styles.hero__image}
            />
            <div className={styles.hero__content}>
              <h2 className={styles.hero__title}>
                ¿Querés hablar con nosotros?
              </h2>
              <Link href="/contacto" className={styles.hero__button}>
                Contacto
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

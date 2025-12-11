/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/porQue.module.css";

export default function PorQueElegirnosYPartners() {
  const [isVisible, setIsVisible] = useState(false);

  const logos = [
    {
      src: "https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765415218/Jumbo_jr1wfn.png",
      alt: "Jumbo",
      width: 140,
      height: 60,
    },
    {
      src: "https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765415216/ml_e58auz.png",
      alt: "Mercado Libre",
      width: 140,
      height: 60,
    },
    {
      src: "https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765415215/tn_pt6mrj.png",
      alt: "Tienda N",
      width: 120,
      height: 60,
    },
    {
      src: "https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765415213/fgp_xs0owa.png",
      alt: "FGP",
      width: 100,
      height: 60,
    },
    {
      src: "https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765415211/dico_mvdcun.png",
      alt: "Disco",
      width: 120,
      height: 60,
    },
    {
      src: "https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765415211/vea_pdiyyn.png",
      alt: "Vea",
      width: 100,
      height: 60,
    },
    {
      src: "https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765415210/pedir_uyw4rj.png",
      alt: "Pedir",
      width: 140,
      height: 60,
    },
  ];

  const stats = [
    { number: "4+", label: "Años en el mercado" },
    { number: "500+", label: "Clientes confían en Puni" },
    { number: "250+", label: "Puners activos" },
    { number: "50K+", label: "Envíos mensuales" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Columna 1: Por qué elegirnos */}
        <div className={`${styles.columna} ${isVisible ? styles.visible : ""}`}>
          <h2 className={styles.title}>Por qué elegirnos</h2>
          <p className={styles.text}>
            Somos líderes en logística on-demand, combinando motos y utilitarios
            para entregar tus productos de forma rápida y segura. Más de 500
            clientes nos eligen, con presencia en 4 provincias y más de 50.000
            envíos por mes. Nuestra plataforma tecnológica conecta comercios con
            repartidores locales, permitiendo seguimiento en tiempo real,
            control de métricas y gestión de pedidos de manera autónoma.
          </p>

          <Link href="/mas-informacion" className={styles.infoButton}>
            Quiero más información
          </Link>

          {/* Estadísticas */}
          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Imagen */}
          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765415844/Una_moto_con_un_conductor_con_una_mochila_de_delivery_que_diga_puni.__Color_de_la_mochila__Rosa__Color_de_la_letra__Azul_1_vculot.jpg"
              alt="Logística Puni - Repartidor en moto"
              width={600}
              height={350}
              className={styles.textImage}
              priority
            />
          </div>

          {/* Botón adicional */}
        </div>

        {/* Columna 2: Partners */}
        <div className={`${styles.columna} ${isVisible ? styles.visible : ""}`}>
          <h3 className={styles.partnersTitle}>Estas marcas nos eligen</h3>
          <p className={styles.partnersSubtitle}>
            Líderes del retail y e-commerce que confían en nuestra plataforma de
            logística on-demand
          </p>

          <div className={styles.logos}>
            {logos.map((logo) => (
              <div key={logo.alt} className={styles.logoCard}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={styles.logoImage}
                />
              </div>
            ))}
          </div>

          <div className={styles.partnersFooter}>
            <p className={styles.partnersFooterText}>
              +20 localidades cubiertas • Presencia en 4 provincias •
              Integración con las principales plataformas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

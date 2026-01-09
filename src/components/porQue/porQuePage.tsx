"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/porQueElegirPuni.module.css";

export default function PorqueElegirPuniSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <header className={styles.header}>
          <h2 className={styles.title}>
            ¿Por qué <span>elegir</span> Puni?
          </h2>

          <p className={styles.subtitle}>
            Porque la logística no debería comerse tus márgenes ni convertir el
            delivery en un problema diario.
          </p>
        </header>

        {/* BLOQUE 1 */}
        <div className={styles.block}>
          {/* TEXTO */}
          <div className={styles.text}>
            <h3 className={styles.blockTitle}>
              Cero comisiones sobre tus productos
            </h3>

            <p>
              Las apps tradicionales se quedan con hasta el 45% de cada venta.
              En Puni eso no existe.
            </p>

            <p>
              Vos vendés lo tuyo, al precio que definís, y el 100% del margen se
              queda en tu negocio. Puni solo se encarga de que el envío suceda.
            </p>

            <ul>
              <li>Sin comisiones ocultas</li>
              <li>Sin intermediarios abusivos</li>
              <li>Sin cambiar tu forma de vender</li>
            </ul>

            <Link href="/forms/envios" className={styles.ctaPrimary}>
              Quiero enviar sin comisiones
            </Link>
          </div>

          {/* IMAGEN */}
          <div className={styles.imageWrapper}>
            <Link href="/forms/envios">
              <Image
                src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1767893189/WhatsApp_Image_2026-01-07_at_23.24.09_si7ggf.jpg"
                alt="Enviar sin comisiones con Puni"
                width={520}
                height={380}
                className={styles.image}
              />
            </Link>
          </div>
        </div>

        {/* BLOQUE 2 */}
        <div className={`${styles.block} ${styles.reverse}`}>
          {/* TEXTO */}
          <div className={styles.text}>
            <h3 className={styles.blockTitle}>
              Logística pensada para el interior
            </h3>

            <p>
              Puni no copia modelos de grandes ciudades. Está diseñada para el
              interior, donde la logística necesita orden, previsibilidad y
              cercanía.
            </p>

            <p>
              Creamos microcélulas logísticas por zonas para asegurar
              repartidores disponibles donde realmente se necesitan.
            </p>

            <ul>
              <li>Menos demoras</li>
              <li>Menos cancelaciones</li>
              <li>Más eficiencia real</li>
            </ul>

            <Link href="/comoFunciona" className={styles.ctaSecondary}>
              Ver cómo funciona
            </Link>
          </div>

          {/* IMAGEN */}
          <div className={styles.imageWrapper}>
            <Link href="/como-funciona">
              <Image
                src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1767893189/WhatsApp_Image_2026-01-07_at_23.22.57_scct8m.jpg"
                alt="Logística por zonas con Puni"
                width={520}
                height={380}
                className={styles.image}
              />
            </Link>
          </div>
        </div>

        {/* BLOQUE 3 */}
        <div className={styles.block}>
          {/* TEXTO */}
          <div className={styles.text}>
            <h3 className={styles.blockTitle}>
              Reglas claras para un mejor servicio
            </h3>

            <p>
              Un sistema desordenado termina afectando al comercio y al cliente.
              Por eso en Puni todo funciona con reglas claras.
            </p>

            <p>
              La asignación inteligente reduce la competencia caótica y mejora
              los tiempos de entrega.
            </p>

            <ul>
              <li>Asignación por cercanía y disponibilidad</li>
              <li>Menos fricción entre repartidores</li>
              <li>Experiencia más profesional</li>
            </ul>

            <Link href="/forms/repartidores" className={styles.ctaTertiary}>
              Quiero ser repartidor
            </Link>
          </div>

          {/* IMAGEN */}
          <div className={styles.imageWrapper}>
            <Link href="/forms/repartidores">
              <Image
                src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1767893189/WhatsApp_Image_2026-01-07_at_23.22.41_q6lyzs.jpg"
                alt="Ser repartidor en Puni"
                width={520}
                height={380}
                className={styles.image}
              />
            </Link>
          </div>
        </div>

        {/* CIERRE */}
        <footer className={styles.footer}>
          <h3>Puni no es una app más. Es infraestructura logística.</h3>

          <p>
            Organizamos la última milla para que comercios y repartidores puedan
            trabajar mejor, sin regalar su esfuerzo a plataformas externas.
          </p>

          <Link href="/forms/contacto" className={styles.ctaPrimary}>
            Quiero hablar con Puni
          </Link>
        </footer>
      </div>
    </section>
  );
}

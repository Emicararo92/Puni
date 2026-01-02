"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/comoFunciona.module.css";

export default function ComoFuncionaPuniSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <header className={styles.header}>
          <h2 className={styles.title}>
            ¿Cómo <span>funciona</span> Puni?
          </h2>

          <p className={styles.subtitle}>
            Puni organiza la logística de última milla conectando comercios y
            repartidores en una misma plataforma, con reglas claras y procesos
            simples.
          </p>
        </header>

        {/* PASO 1 */}
        <div className={styles.step}>
          <div className={styles.text}>
            <span className={styles.stepNumber}>01</span>
            <h3 className={styles.stepTitle}>El comercio crea el envío</h3>

            <p className={styles.paragraph}>
              El comercio ingresa a Puni y solicita un envío: define el punto de
              retiro, el destino y el tipo de entrega. Puede hacerlo al instante
              (on-demand) o programarlo para más adelante.
            </p>

            <p className={styles.paragraph}>
              No hay comisiones sobre el producto. Puni no interfiere en la
              venta: solo se ocupa de que el envío suceda de forma eficiente.
            </p>

            <div className={styles.cta}>
              <Link href="/forms/envios" className={styles.button}>
                Quiero crear envios
              </Link>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1766086269/ChatGPT_Image_18_dic_2025_04_30_53_p.m._vlskft.png"
              alt="Crear envío en Puni"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>

        {/* PASO 2 */}
        <div className={`${styles.step} ${styles.reverse}`}>
          <div className={styles.text}>
            <span className={styles.stepNumber}>02</span>
            <h3 className={styles.stepTitle}>
              El sistema asigna el repartidor
            </h3>

            <p className={styles.paragraph}>
              Puni trabaja con microcélulas logísticas por zonas. Esto permite
              equilibrar la oferta y la demanda: hay repartidores disponibles
              donde hay pedidos.
            </p>

            <p className={styles.paragraph}>
              El pedido se asigna de forma inteligente según cercanía,
              disponibilidad y momento del día, evitando el caos y la
              competencia desordenada.
            </p>

            <div className={styles.cta}>
              <Link href="/forms/repartidores" className={styles.buttonAlt}>
                Quiero ser repartidor
              </Link>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1766086453/ChatGPT_Image_18_dic_2025_04_33_56_p.m._jjbvn7.png"
              alt="Asignación inteligente de repartidores"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>

        {/* PASO 3 */}
        <div className={styles.step}>
          <div className={styles.text}>
            <span className={styles.stepNumber}>03</span>
            <h3 className={styles.stepTitle}>
              El envío se realiza y se controla
            </h3>

            <p className={styles.paragraph}>
              Una vez asignado, el repartidor realiza el retiro y la entrega.
              Tanto el comercio como el repartidor pueden seguir el estado del
              envío y operar con información clara.
            </p>

            <p className={styles.paragraph}>
              El foco está en la organización del servicio: menos fricción,
              menos improvisación y una experiencia más profesional para todos.
            </p>

            <div className={styles.cta}>
              <Link href="/forms/contacto" className={styles.buttonPrimary}>
                Quiero saber más
              </Link>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1766086580/ChatGPT_Image_18_dic_2025_04_36_06_p.m._wyrpas.png"
              alt="Seguimiento y control del envío"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>

        {/* CIERRE */}
        <footer className={styles.footer}>
          <h3 className={styles.footerTitle}>
            Logística simple, justa y pensada para el interior
          </h3>

          <p className={styles.footerText}>
            Puni no improvisa entregas: construye un sistema donde comercios y
            repartidores trabajan mejor, con menos fricción y más
            previsibilidad.
          </p>

          <div className={styles.ctaCenter}>
            <Link href="/queEsPuni" className={styles.buttonSecondary}>
              Volver a ¿Qué es Puni?
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}

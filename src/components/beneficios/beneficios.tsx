"use client";

import Link from "next/link";
import styles from "../../styles/beneficios.module.css";

export default function BeneficiosSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            ¿Tu negocio trabaja para vos
            <br />o para las plataformas?
          </h2>

          <p className={styles.subHeader}>
            Redefiní tu estrategia, recuperá hasta el{" "}
            <span className={styles.highlight}>45%</span> perdido y hacé crecer
            tus márgenes con Puni.
          </p>
        </div>

        <div className={styles.benefitsContent}>
          {/* PROBLEMA */}
          <div className={styles.benefitItem}>
            <div className={styles.benefitHeader}>
              <h3 className={styles.benefitTitle}>
                ❌ El modelo insostenible de las apps tradicionales
              </h3>
            </div>

            <div className={styles.benefitText}>
              Las plataformas de delivery actuales se quedan con hasta el{" "}
              <span className={styles.textHighlight}>45% de cada venta</span>,
              reduciendo tus márgenes y haciéndote depender cada vez más.
            </div>

            <div className={styles.benefitText}>
              El resultado es claro: ganás menos, perdés control y terminás
              trabajando para la app, no para tu negocio.
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* SOLUCIÓN */}
          <div className={styles.benefitItem}>
            <div className={styles.benefitHeader}>
              <h3 className={styles.benefitTitle}>
                ✅ El Modelo Puni: Logística justa, márgenes íntegros
              </h3>
            </div>

            <div className={styles.benefitText}>
              <span className={styles.textHighlight}>
                Sin comisiones sobre tus productos.
              </span>{" "}
              Sin sorpresas. Sin intermediarios abusivos.
            </div>

            <div className={styles.benefitText}>
              Puni conecta tu comercio con una red de repartidores on-demand
              mediante una plataforma tecnológica propia, eficiente y local.
            </div>

            <div className={styles.benefitText}>
              <span className={styles.textHighlight}>
                El 100% de tu margen se queda en tu negocio.
              </span>{" "}
              Invertí en crecer, no en pagar comisiones ajenas.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.buttonContainer}>
          <Link href="/forms/envios" className={styles.infoButton}>
            Quiero recuperar mi margen
          </Link>
        </div>
      </div>
    </section>
  );
}

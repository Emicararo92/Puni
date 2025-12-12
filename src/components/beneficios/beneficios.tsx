"use client";

import Link from "next/link";
import styles from "../../styles/beneficios.module.css";

export default function BeneficiosSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            El <span className={styles.highlight}>45%</span> que está frenando
            el crecimiento de tu negocio
          </h2>
          <p className={styles.subHeader}>
            Descubre cómo recuperar el control de tus ganancias
          </p>
        </div>

        <div className={styles.benefitsContent}>
          {/* Problema */}
          <div className={styles.benefitItem}>
            <div className={styles.benefitHeader}>
              <h3 className={styles.benefitTitle}>
                El modelo insostenible de las Apps tradicionales
              </h3>
            </div>

            <div className={styles.benefitText}>
              <span className={styles.textHighlight}>Altas comisiones:</span>{" "}
              Las apps líderes cobran comisiones de hasta el 45% del producto.
              Esto reduce drásticamente tu margen de ganancia, obligándote a
              sentir que trabajas para la app y no al revés.
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Solución */}
          <div className={styles.benefitItem}>
            <div className={styles.benefitHeader}>
              <h3 className={styles.benefitTitle}>
                El Modelo Puni: Logística Justa y 100% de tu Margen
              </h3>
            </div>

            <div className={styles.benefitText}>
              <span className={styles.textHighlight}>
                SIN COMISIONES SOBRE TUS PRODUCTOS.
              </span>{" "}
              Creamos una plataforma tecnológica que conecta tu comercio con una
              flota de Repartidores On-Demand, pero con una diferencia radical:
              SIN COMISIONES SOBRE TUS PRODUCTOS.
            </div>

            <div className={styles.benefitText}>
              <span className={styles.textHighlight}>
                ¡Tu GANANCIA se queda en tu NEGOCIO!
              </span>{" "}
              Te quedas con el 100% del margen de tus productos.
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Link href="/mas-informacion" className={styles.infoButton}>
            Quiero más información
          </Link>
        </div>
      </div>
    </section>
  );
}

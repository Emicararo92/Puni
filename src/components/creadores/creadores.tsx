"use client";

import Image from "next/image";
import styles from "../../styles/creadores.module.css";

export default function FundadoresSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Founder & CEO */}
        <div className={styles.block}>
          <div className={styles.textCol}>
            <h3 className={styles.name}>Matias Millicay</h3>
            <h4 className={styles.role}>Founder & CEO</h4>
            <p className={styles.text}>
              Emprendedor del interior y apasionado por crear soluciones que
              transformen industrias. Como fundador y CEO de PUNI, lidero la
              operación, logística, expansión comercial y desarrollo de
              licencias en múltiples ciudades.
            </p>
            <p className={styles.text}>
              Mi misión es construir la infraestructura que democratice la
              última milla en Latinoamérica, conectando comercios, repartidores
              y tecnología con un modelo transparente, humano y de calidad.
            </p>
          </div>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1767033005/Subt%C3%ADtulo_6_kdoo60.png"
                alt="Matias Millicay"
                width={400}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        {/* Co-founder & CFO */}
        <div className={`${styles.block} ${styles.reverse}`}>
          <div className={styles.textCol}>
            <h3 className={styles.name}>Débora Ludueña</h3>
            <h4 className={styles.role}>Co-founder & CFO</h4>
            <p className={styles.text}>
              Contadora, emprendedora y una mujer que construye desde las
              finanzas el corazón estratégico de PUNI. Como cofundadora y CFO,
              lidero la planificación financiera, la rentabilidad y la
              estructura que sostiene nuestro crecimiento en todo el país.
            </p>
            <p className={styles.text}>
              Mi misión es transformar la logística con bases claras y humanas,
              asegurando que cada operación y cada franquicia tenga el soporte
              necesario para escalar.
            </p>
          </div>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1767033005/Subt%C3%ADtulo_7_egqvlv.png"
                alt="Débora Ludueña"
                width={400}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

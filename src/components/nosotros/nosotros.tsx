"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/nosotros.module.css";

export default function NosotrosSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Columna izquierda: texto */}
        <div className={styles.columna}>
          <h2 className={styles.title}>Sobre Nosotros</h2>
          <p className={styles.text}>
            En Puni brindamos soluciones logísticas on-demand, combinando
            tecnología y una red de repartidores locales. Nuestro objetivo es
            que cada envío llegue rápido, seguro y con el mejor servicio.
          </p>
          <p className={styles.text}>
            Contamos con más de 4 años de experiencia, cientos de clientes
            satisfechos y presencia en múltiples provincias. La transparencia y
            la eficiencia son nuestra prioridad.
          </p>

          {/* Botón adicional */}
          <Link href="/mas-informacion" className={styles.infoButton}>
            Quiero más información
          </Link>
        </div>

        {/* Columna derecha: logo + imagen */}
        <div className={styles.columna}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765407558/Screenshot_2025-12-10_160544-removebg-preview_dogmxk.png"
              alt="Nuestra empresa"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

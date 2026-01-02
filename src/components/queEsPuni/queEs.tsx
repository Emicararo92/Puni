"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/queEs.module.css";

export default function QueEsPuniSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER GENERAL */}
        <header className={styles.header}>
          <h2 className={styles.title}>
            ¿Qué es <span>Puni</span>?
          </h2>

          <p className={styles.subtitle}>
            Puni es la primera plataforma de logística on-demand del interior.
            No vendemos productos: construimos la infraestructura que hace que
            cada entrega funcione de forma simple, justa y ordenada.
          </p>
        </header>

        {/* BLOQUE COMERCIO */}
        <div className={styles.block}>
          <div className={styles.text}>
            <h3 className={styles.blockTitle}>Si sos Comercio</h3>

            <p className={styles.paragraph}>
              Con Puni podés despachar tus pedidos de manera profesional, sin
              intermediarios que se queden con tu margen. Vos vendés lo tuyo,
              Puni se encarga del envío.
            </p>

            <p className={styles.paragraph}>
              Pedís un retiro en el momento (on-demand) o coordinás envíos
              programados según tu operación. Accedés a una red activa de
              repartidores disponibles en tu zona, con reglas claras y sin
              comisiones sobre tus productos.
            </p>

            <ul className={styles.list}>
              <li>Sin comisiones por vender.</li>
              <li>Retiros inmediatos o envíos programados.</li>
              <li>Repartidores disponibles según tu zona.</li>
              <li>Seguimiento del envío y control del servicio.</li>
              <li>Operación clara, sin costos ocultos.</li>
            </ul>

            <div className={styles.cta}>
              <Link href="/forms/envios" className={styles.button}>
                Quiero enviar con Puni
              </Link>
            </div>
          </div>

          {/* IMAGEN COMERCIO */}
          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1766077514/ChatGPT_Image_18_dic_2025_02_03_56_p.m._b38dnm.png"
              alt="Puni para comercios"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>

        {/* BLOQUE REPARTIDOR */}
        <div className={`${styles.block} ${styles.reverse}`}>
          <div className={styles.text}>
            <h3 className={styles.blockTitle}>Si sos Repartidor (Puner)</h3>

            <p className={styles.paragraph}>
              Puni te conecta con comercios reales que necesitan envíos en tu
              zona. Sin caos, sin competencia desleal, sin reglas cambiantes.
            </p>

            <p className={styles.paragraph}>
              El sistema prioriza el orden y la disponibilidad: los pedidos se
              asignan de forma inteligente según zona y momento, para que el
              trabajo sea sostenible y tenga sentido.
            </p>

            <ul className={styles.list}>
              <li>Pedidos disponibles en tu zona.</li>
              <li>Conexión directa con comercios.</li>
              <li>Asignación inteligente por cercanía.</li>
              <li>Reglas claras y operación ordenada.</li>
              <li>Un sistema pensado para durar.</li>
            </ul>

            <div className={styles.cta}>
              <Link href="/forms/repartidores" className={styles.buttonAlt}>
                Quiero ser Puner
              </Link>
            </div>
          </div>

          {/* IMAGEN REPARTIDOR */}
          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1766077504/WhatsApp_Image_2025-12-17_at_00.24.13_qovubm.jpg"
              alt="Puni para repartidores"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>

        {/* BLOQUE DIFERENCIAL */}
        <div className={styles.footer}>
          <h3 className={styles.footerTitle}>¿Qué hace diferente a Puni?</h3>

          <p className={styles.footerText}>
            Creamos microcélulas logísticas por zonas: equilibramos oferta y
            demanda para que haya pedidos donde se necesitan y repartidores
            disponibles cuando hace falta, priorizando siempre el servicio.
          </p>

          <ul className={styles.checklist}>
            <li>Cero comisiones sobre productos.</li>
            <li>Última milla on-demand, pensada para el interior.</li>
          </ul>

          <div className={styles.ctaCenter}>
            <Link href="/forms/contacto" className={styles.buttonPrimary}>
              Quiero conocer Puni
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

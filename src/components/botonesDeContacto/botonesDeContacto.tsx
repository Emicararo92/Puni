"use client";

import Link from "next/link";
import Image from "next/image";
import { FaMotorcycle, FaBoxOpen, FaHandshake } from "react-icons/fa";
import styles from "../../styles/botonesContacto.module.css";

export default function BotonesDeContacto() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Contenedor de imagen con círculo de fondo */}
        <div className={styles.imageContainer}>
          {/* Círculo de fondo azul con Tailwind */}
          <div
            className="absolute w-[350px] h-[350px] rounded-full bg-[#1e3764] z-0 
                        shadow-[0_20px_60px_rgba(30,55,100,0.3),inset_0_4px_20px_rgba(255,255,255,0.1)]"
          ></div>

          {/* Contenedor para la imagen que sobresale */}
          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1766426034/WhatsApp_Image_2025-12-17_at_00.23.07-removebg-preview_xndxog.png"
              alt="Cadete Puni listo para entregar"
              width={400}
              height={400}
              className={`${styles.image} drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]`}
              priority
            />
          </div>
        </div>

        {/* Botones del lado derecho */}
        <div className={styles.buttonsContainer}>
          <h2 className={styles.title}>¿Qué necesitás?</h2>
          <p className={styles.subtitle}>
            Elegí la opción que mejor se adapte a lo que buscás
          </p>

          <div className={styles.buttonsGrid}>
            <Link href="/forms/repartidores" className={styles.button}>
              <div className={styles.buttonIcon}>
                <FaMotorcycle />
              </div>
              <div className={styles.buttonContent}>
                <h3 className={styles.buttonTitle}>Quiero ser repartidor</h3>
                <p className={styles.buttonDescription}>
                  Únete a nuestra red de cadetes y gana dinero flexible
                </p>
              </div>
              <div className={styles.buttonArrow}>→</div>
            </Link>

            <Link href="/forms/envios" className={styles.button}>
              <div className={styles.buttonIcon}>
                <FaBoxOpen />
              </div>
              <div className={styles.buttonContent}>
                <h3 className={styles.buttonTitle}>Quiero envíos</h3>
                <p className={styles.buttonDescription}>
                  Envía comida, documentos y paquetes de forma rápida
                </p>
              </div>
              <div className={styles.buttonArrow}>→</div>
            </Link>

            <Link href="/forms/colaborar" className={styles.button}>
              <div className={styles.buttonIcon}>
                <FaHandshake />
              </div>
              <div className={styles.buttonContent}>
                <h3 className={styles.buttonTitle}>Quiero colaborar</h3>
                <p className={styles.buttonDescription}>
                  Trabajemos juntos para mejorar el servicio
                </p>
              </div>
              <div className={styles.buttonArrow}>→</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// AppDownload.tsx - VERSIÓN COMPACTA Y CENTRADA
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/appDescarga.module.css";

export default function AppDownload() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = ["mobile", "desktop"];

  // Rotación automática cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const infoSlides = [
    {
      icon: "📱",
      text: (
        <>
          <strong>App móvil:</strong> Ideal para repartidores en movimiento
        </>
      ),
    },
    {
      icon: "💻",
      text: (
        <>
          <strong>Web:</strong> Perfecta para comercios en escritorio
        </>
      ),
    },
    {
      icon: "🔄",
      text: (
        <>
          <strong>Sincronizado:</strong> Usá ambos, tu información se mantiene
        </>
      ),
    },
  ];

  const [activeInfo, setActiveInfo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInfo((prev) => (prev + 1) % infoSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.appDownload}>
      <div className={styles.appDownload__container}>
        {/* ===== CONTENIDO ===== */}
        <div className={styles.appDownload__content}>
          <div className={styles.appDownload__header}>
            <span className={styles.appDownload__badge}>
              <span className={styles.appDownload__badgeIcon}>🚀</span>
              Plataforma oficial
            </span>

            <h2 className={styles.appDownload__title}>
              Puni{" "}
              <span className={styles.appDownload__titleHighlight}>
                Plataforma
              </span>
            </h2>

            <p className={styles.appDownload__description}>
              Una sola plataforma para repartidores y comercios. Accedé desde
              cualquier dispositivo, elegí tu rol al iniciar sesión.
            </p>
          </div>

          {/* FEATURES */}
          <div className={styles.appDownload__features}>
            <div className={styles.appDownload__featureCard}>
              <div className={styles.appDownload__featureIconWrapper}>
                <span className={styles.appDownload__featureIcon}>📱💻</span>
              </div>
              <div className={styles.appDownload__featureContent}>
                <h3 className={styles.appDownload__featureTitle}>
                  App móvil y Web
                </h3>
                <p className={styles.appDownload__featureText}>
                  Misma plataforma en todos los dispositivos. Elegí cómo acceder
                  según tu preferencia.
                </p>
              </div>
            </div>

            <div className={styles.appDownload__featureCard}>
              <div className={styles.appDownload__featureIconWrapper}>
                <span className={styles.appDownload__featureIcon}>👥</span>
              </div>
              <div className={styles.appDownload__featureContent}>
                <h3 className={styles.appDownload__featureTitle}>
                  Rol automático
                </h3>
                <p className={styles.appDownload__featureText}>
                  La experiencia se adapta según el tipo de usuario con el que
                  inicies sesión.
                </p>
              </div>
            </div>

            <div className={styles.appDownload__featureCard}>
              <div className={styles.appDownload__featureIconWrapper}>
                <span className={styles.appDownload__featureIcon}>⚡</span>
              </div>
              <div className={styles.appDownload__featureContent}>
                <h3 className={styles.appDownload__featureTitle}>
                  Sincronizado
                </h3>
                <p className={styles.appDownload__featureText}>
                  Cambiá entre dispositivos sin perder información. Todo
                  actualizado en tiempo real.
                </p>
              </div>
            </div>
          </div>

          {/* BOTONES DE DESCARGA (SOLO DESKTOP) */}
          <div className={styles.appDownload__actions}>
            <div className={styles.appDownload__actionsHeader}>
              <h3 className={styles.appDownload__actionsTitle}>
                Accedé a Puni
              </h3>
              <p className={styles.appDownload__actionsSubtitle}>
                Una plataforma, múltiples formas de acceder
              </p>
            </div>

            <div className={styles.appDownload__buttons}>
              {/* APP MÓVIL - GOOGLE PLAY */}
              <a
                href="https://play.google.com/store/apps/details?id=com.puniya.repartidores&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.appDownload__button} ${styles["appDownload__button--playstore"]}`}
                aria-label="Descargar app Puni desde Google Play Store"
              >
                <div className={styles.appDownload__buttonIconWrapper}>
                  <span className={styles.appDownload__buttonIcon}>
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path
                        fill="currentColor"
                        d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                      />
                    </svg>
                  </span>
                </div>
                <div className={styles.appDownload__buttonContent}>
                  <span className={styles.appDownload__buttonLabel}>
                    App móvil
                  </span>
                  <span className={styles.appDownload__buttonMain}>
                    Descargar en
                  </span>
                </div>
                <div className={styles.appDownload__playstoreBadge}>
                  <svg width="17" height="17" viewBox="0 0 512 512">
                    <path
                      fill="#34A853"
                      d="M325.3 234.3L104.6 13.6C99.6 8.6 93.5 6 87.2 6c-3.4 0-6.8.7-10 2.1L332 262.9l-6.7-28.6z"
                    />
                    <path
                      fill="#FBBC04"
                      d="M410.9 230.8L358.6 200l-56.4 56.4 56.4 56.4 52.3-30.8c10.4-6.1 10.4-21.1 0-27.2z"
                    />
                    <path
                      fill="#EA4335"
                      d="M332 262.9L77.2 509.9c3.2 1.4 6.6 2.1 10 2.1 6.3 0 12.4-2.6 17.4-7.6l220.7-220.7z"
                    />
                    <path
                      fill="#4285F4"
                      d="M77.2 2.1C69.8 5.3 64 12.5 64 22.1v467.8c0 9.6 5.8 16.8 13.2 20L332 262.9 77.2 2.1z"
                    />
                  </svg>
                  <span>Play Store</span>
                </div>
              </a>

              {/* PLATAFORMA WEB */}
              <a
                href="https://puniya.ar/pLogin"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.appDownload__button} ${styles["appDownload__button--web"]}`}
                aria-label="Acceder a la plataforma web de Puni"
              >
                <div className={styles.appDownload__buttonIconWrapper}>
                  <span className={styles.appDownload__buttonIcon}>
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M6,7H18V9H6V7M6,11H18V13H6V11M6,15H18V17H6V15Z"
                      />
                    </svg>
                  </span>
                </div>
                <div className={styles.appDownload__buttonContent}>
                  <span className={styles.appDownload__buttonLabel}>
                    Plataforma web
                  </span>
                  <span className={styles.appDownload__buttonMain}>
                    Acceder desde el navegador
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ===== CARRUSEL DE MOCKUPS ===== */}
        <div className={styles.appDownload__visual}>
          {/* FONDO DECORATIVO */}
          <div className={styles.appDownload__backgroundDecoration}>
            <div
              className={`${styles.appDownload__backgroundCircle} ${styles["appDownload__backgroundCircle--1"]}`}
            ></div>
            <div
              className={`${styles.appDownload__backgroundCircle} ${styles["appDownload__backgroundCircle--2"]}`}
            ></div>
            <div
              className={`${styles.appDownload__backgroundCircle} ${styles["appDownload__backgroundCircle--3"]}`}
            ></div>
          </div>

          {/* CARRUSEL */}
          <div className={styles.appDownload__mockupsCarousel}>
            {/* SLIDE MOBILE */}
            <div
              className={`${styles.appDownload__mockupSlide} ${
                activeSlide === 0
                  ? styles["appDownload__mockupSlide--active"]
                  : activeSlide === 1
                  ? styles["appDownload__mockupSlide--prev"]
                  : styles["appDownload__mockupSlide--next"]
              }`}
            >
              <div
                className={`${styles.appDownload__mockup} ${styles["appDownload__mockup--mobile"]}`}
              >
                <div className={styles.appDownload__mockupImageWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1767382273/WhatsApp_Image_2026-01-02_at_14.54.36_e5air0.jpg"
                    alt="App móvil Puni - Pantalla de inicio de sesión y selección de rol"
                    width={300}
                    height={600}
                    className={styles.appDownload__mockupImage}
                    priority={activeSlide === 0}
                    sizes="(max-width: 768px) 180px, 220px"
                  />
                </div>
                <div className={styles.mockupBadge}>
                  <span className={styles.mockupBadgeIcon}>📱</span>
                  <span className={styles.mockupBadgeText}>App Móvil</span>
                </div>
              </div>
            </div>

            {/* SLIDE DESKTOP */}
            <div
              className={`${styles.appDownload__mockupSlide} ${
                activeSlide === 1
                  ? styles["appDownload__mockupSlide--active"]
                  : activeSlide === 0
                  ? styles["appDownload__mockupSlide--next"]
                  : styles["appDownload__mockupSlide--prev"]
              }`}
            >
              <div
                className={`${styles.appDownload__mockup} ${styles["appDownload__mockup--desktop"]}`}
              >
                <div className={styles.appDownload__mockupImageWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1767382278/Screenshot_2026-01-02_163104_cdbugv.png"
                    alt="Plataforma web Puni - Dashboard con opciones para repartidores y comercios"
                    width={500}
                    height={300}
                    className={styles.appDownload__mockupImage}
                    priority={activeSlide === 1}
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                </div>
                <div className={styles.mockupBadge}>
                  <span className={styles.mockupBadgeIcon}>💻</span>
                  <span className={styles.mockupBadgeText}>Plataforma Web</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTROLES DEL CARRUSEL */}
          {/* INDICADORES */}
          <div className={styles.appDownload__carouselIndicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.appDownload__carouselIndicator} ${
                  activeSlide === index
                    ? styles["appDownload__carouselIndicator--active"]
                    : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ver ${
                  index === 0 ? "app móvil" : "plataforma web"
                }`}
                aria-current={activeSlide === index}
              />
            ))}
          </div>

          {/* LEYENDA */}
          <div className={styles.appDownload__legend}>
            <div className={styles.appDownload__legendItem}>
              <div className={styles.legendItem__icon}>📱</div>
              <div className={styles.legendItem__text}>App móvil (Android)</div>
            </div>
            <div className={styles.appDownload__legendItem}>
              <div className={styles.legendItem__icon}>💻</div>
              <div className={styles.legendItem__text}>Plataforma web</div>
            </div>
          </div>

          {/* BOTONES DE DESCARGA (SOLO MOBILE/TABLET) */}
          <div className={styles.appDownload__downloadButtons}>
            {/* APP MÓVIL - GOOGLE PLAY */}
            <a
              href="https://play.google.com/store/apps/details?id=com.puniya.repartidores&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.appDownload__button} ${styles["appDownload__button--playstore"]}`}
              aria-label="Descargar app Puni desde Google Play Store"
            >
              <div className={styles.appDownload__buttonIconWrapper}>
                <span className={styles.appDownload__buttonIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                    />
                  </svg>
                </span>
              </div>
              <div className={styles.appDownload__buttonContent}>
                <span className={styles.appDownload__buttonLabel}>
                  App móvil
                </span>
                <span className={styles.appDownload__buttonMain}>
                  Play Store
                </span>
              </div>
            </a>

            {/* PLATAFORMA WEB */}
            <a
              href="https://puniya.ar/pLogin"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.appDownload__button} ${styles["appDownload__button--web"]}`}
              aria-label="Acceder a la plataforma web de Puni"
            >
              <div className={styles.appDownload__buttonIconWrapper}>
                <span className={styles.appDownload__buttonIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M6,7H18V9H6V7M6,11H18V13H6V11M6,15H18V17H6V15Z"
                    />
                  </svg>
                </span>
              </div>
              <div className={styles.appDownload__buttonContent}>
                <span className={styles.appDownload__buttonLabel}>
                  Plataforma web
                </span>
                <span className={styles.appDownload__buttonMain}>
                  Acceder ahora
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

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
                <h3 className={styles.appDownload__featureTitle}>Doble rol</h3>
                <p className={styles.appDownload__featureText}>
                  Una cuenta, dos experiencias. Iniciá sesión como repartidor o
                  comercio.
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
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Google Play</span>
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

            <div className={styles.appDownload__info}>
              <div className={styles.appDownload__infoItem}>
                <span className={styles.appDownload__infoIcon}>📱</span>
                <span className={styles.appDownload__infoText}>
                  <strong>App móvil:</strong> Ideal para repartidores en
                  movimiento
                </span>
              </div>
              <div className={styles.appDownload__infoItem}>
                <span className={styles.appDownload__infoIcon}>💻</span>
                <span className={styles.appDownload__infoText}>
                  <strong>Web:</strong> Perfecta para comercios en escritorio
                </span>
              </div>
              <div className={styles.appDownload__infoItem}>
                <span className={styles.appDownload__infoIcon}>🔄</span>
                <span className={styles.appDownload__infoText}>
                  <strong>Sincronizado:</strong> Usá ambos, tu información se
                  mantiene
                </span>
              </div>
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
          <div className={styles.appDownload__carouselControls}>
            <button
              className={styles.appDownload__carouselButton}
              onClick={prevSlide}
              aria-label="Ver mockup anterior"
            >
              ←
            </button>
            <button
              className={styles.appDownload__carouselButton}
              onClick={nextSlide}
              aria-label="Ver siguiente mockup"
            >
              →
            </button>
          </div>

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
                  Google Play
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

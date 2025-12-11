"use client";

import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import styles from "../../styles/WhatsAppFloatingButton.module.css";

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const phoneNumber = "5490000000000"; // Reemplaza con tu número
  const message = "Hola! Me interesa saber más sobre los servicios de Puni.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Detectar scroll para ocultar/mostrar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ocultar al hacer scroll hacia abajo, mostrar al subir
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        !(e.target as Element).closest(`.${styles.whatsappContainer}`)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.whatsappContainer} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      {/* Menú expandible */}
      {isOpen && (
        <div className={styles.optionsMenu}>
          <div className={styles.menuHeader}>
            <h4 className={styles.menuTitle}>Contactar por WhatsApp</h4>
            <p className={styles.menuSubtitle}>Selecciona una opción</p>
          </div>

          <div className={styles.optionsList}>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hola! Quiero información sobre cómo ser repartidor"
              )}`}
              className={styles.optionItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.optionIcon}>🚚</span>
              <div className={styles.optionContent}>
                <span className={styles.optionTitle}>
                  Quiero ser repartidor
                </span>
                <span className={styles.optionDescription}>
                  Información para puners
                </span>
              </div>
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hola! Necesito información para enviar paquetes"
              )}`}
              className={styles.optionItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.optionIcon}>📦</span>
              <div className={styles.optionContent}>
                <span className={styles.optionTitle}>Quiero hacer envíos</span>
                <span className={styles.optionDescription}>
                  Para empresas y comercios
                </span>
              </div>
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hola! Me interesa colaborar con Puni"
              )}`}
              className={styles.optionItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.optionIcon}>🤝</span>
              <div className={styles.optionContent}>
                <span className={styles.optionTitle}>Quiero colaborar</span>
                <span className={styles.optionDescription}>
                  Alianzas y franquicias
                </span>
              </div>
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hola! Necesito soporte técnico"
              )}`}
              className={styles.optionItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.optionIcon}>🛠️</span>
              <div className={styles.optionContent}>
                <span className={styles.optionTitle}>Soporte técnico</span>
                <span className={styles.optionDescription}>
                  Ayuda con la plataforma
                </span>
              </div>
            </a>
          </div>

          <div className={styles.menuFooter}>
            <a
              href={whatsappUrl}
              className={styles.directButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <span>Mensaje directo</span>
            </a>
          </div>
        </div>
      )}

      {/* Botón principal */}
      <button
        className={`${styles.whatsappButton} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label={
          isOpen ? "Cerrar menú de WhatsApp" : "Abrir menú de WhatsApp"
        }
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <FaTimes className={styles.closeIcon} />
        ) : (
          <>
            <FaWhatsapp className={styles.whatsappIcon} />
            <span className={styles.pulseRing}></span>
            <span className={styles.pulseRing}></span>
          </>
        )}
      </button>

      {/* Etiqueta flotante */}
      {!isOpen && (
        <div className={styles.floatingLabel}>
          <span>¿Necesitás ayuda?</span>
          <div className={styles.labelArrow}></div>
        </div>
      )}
    </div>
  );
}

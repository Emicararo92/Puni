"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "../../styles/WhatsAppFloatingButton.module.css";

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const phoneNumber = "5490000000000"; // reemplazar por el real
  const message = "Hola! Me interesa saber más sobre los servicios de Puni.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  /* Mostrar / ocultar según scroll */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.whatsappButton} ${
        isVisible ? styles.visible : styles.hidden
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className={styles.whatsappIcon} />

      {/* efectos visuales si existen en CSS */}
      <span className={styles.pulseRing}></span>
      <span className={styles.pulseRing}></span>
    </a>
  );
}

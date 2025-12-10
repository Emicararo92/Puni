"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "../../styles/navBar.module.css";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /* Detectar scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Bloquear scroll body cuando menú mobile está abierto */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar__container}>
        {/* LOGO */}
        <div className={styles.navbar__brand}>
          <Link
            href="/"
            onClick={closeAllMenus}
            className={styles.navbar__logo}
          >
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765407558/Screenshot_2025-12-10_160553-removebg-preview_kyaua9.png"
              alt="Puni"
              width={140}
              height={40}
              priority
              className={styles.navbar__logo_image}
            />
          </Link>
        </div>

        {/* Toggle mobile */}
        <button
          className={`${styles.navbar__mobile_toggle} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Abrir menú"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.navbar__mobile_line} />
          <span className={styles.navbar__mobile_line} />
          <span className={styles.navbar__mobile_line} />
        </button>

        {/* NAV DESKTOP */}
        <nav className={styles.navbar__nav}>
          <ul className={styles.navbar__menu}>
            <li className={styles.navbar__item}>
              <Link href="/" className={styles.navbar__link}>
                Inicio
              </Link>
            </li>

            {/* REGISTROS DROPDOWN */}
            <li
              className={`${styles.navbar__item} ${styles["navbar__item--has-dropdown"]}`}
            >
              <button
                className={`${styles.navbar__link} ${styles.navbar__dropdown_trigger}`}
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                Registros
                <FaChevronDown
                  className={`${styles.navbar__dropdown_icon} ${
                    isDropdownOpen ? styles.open : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <ul className={styles.navbar__dropdown}>
                  <li>
                    <Link href="/repartidores" onClick={closeAllMenus}>
                      Quiero ser repartidor
                    </Link>
                  </li>
                  <li>
                    <Link href="/envios" onClick={closeAllMenus}>
                      Quiero envíos
                    </Link>
                  </li>
                  <li>
                    <Link href="/colaborar" onClick={closeAllMenus}>
                      Quiero colaborar con Puni
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className={styles.navbar__item}>
              <Link href="/porque-elegirnos" className={styles.navbar__link}>
                Por qué elegirnos
              </Link>
            </li>

            <li className={styles.navbar__item}>
              <Link href="/contacto" className={styles.navbar__link}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* WhatsApp Desktop */}
        <div className={styles.navbar__cta}>
          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navbar__whatsapp_button}
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* OVERLAY MOBILE */}
        {isMobileMenuOpen && (
          <div
            className={styles.navbar__mobile_overlay}
            onClick={closeAllMenus}
          />
        )}

        {/* MENU MOBILE */}
        {isMobileMenuOpen && (
          <div className={styles.navbar__mobile_menu}>
            <ul className={styles.navbar__mobile_list}>
              <li>
                <Link href="/" onClick={closeAllMenus}>
                  Inicio
                </Link>
              </li>

              <li>
                <button onClick={toggleDropdown}>
                  Registros <FaChevronDown />
                </button>

                {isDropdownOpen && (
                  <ul className={styles.navbar__mobile_dropdown}>
                    <li>
                      <Link href="/repartidores" onClick={closeAllMenus}>
                        Quiero ser repartidor
                      </Link>
                    </li>
                    <li>
                      <Link href="/envios" onClick={closeAllMenus}>
                        Quiero envíos
                      </Link>
                    </li>
                    <li>
                      <Link href="/colaborar" onClick={closeAllMenus}>
                        Quiero colaborar con Puni
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link href="/porque-elegirnos" onClick={closeAllMenus}>
                  Por qué elegirnos
                </Link>
              </li>

              <li>
                <Link href="/contacto" onClick={closeAllMenus}>
                  Contacto
                </Link>
              </li>
            </ul>

            <div className={styles.navbar__mobile_cta}>
              <a
                href="https://wa.me/5490000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

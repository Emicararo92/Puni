"use client";

import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "../../styles/navBar.module.css";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true); // ESTADO PARA TOPBAR

  /* Scroll - Controlar navbar Y topbar */
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // CONTROLAR TOPBAR (desaparece después de 100px)
      const topbarVisible = window.scrollY <= 100;
      setIsTopBarVisible(topbarVisible);

      // Coordinar padding del body
      document.body.style.paddingTop = window.scrollY > 100 ? "80px" : "120px";
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Inicializar

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock scroll body en mobile */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* TOP BAR - CON CLASES VISIBLE/HIDDEN */}
      <div
        className={`${styles.topbar} ${
          isTopBarVisible ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.topbar__container}>
          <div className={styles.topbar__socials}>
            <a
              href="https://www.instagram.com/puni.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.topbar__link}
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/5493515174441"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.topbar__link}
            >
              <FaWhatsapp />
            </a>
          </div>

          <Link href="/forms/colaborar" className={styles.topbar__cta}>
            Sumate a Puni
          </Link>
        </div>
      </div>

      {/* NAVBAR - CON CLASE topbarHidden CUANDO TOPBAR NO ES VISIBLE */}
      <header
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${
          !isTopBarVisible ? styles.topbarHidden : ""
        }`}
      >
        <div className={styles.navbar__container}>
          {/* LOGO */}
          <div className={styles.navbar__brand}>
            <Link href="/" onClick={closeAllMenus}>
              <Image
                src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765407558/Screenshot_2025-12-10_160553-removebg-preview_kyaua9.png"
                alt="Puni"
                width={140}
                height={40}
                priority
                className={styles.navbar__logo}
              />
            </Link>
          </div>

          {/* TOGGLE MOBILE */}
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
              <li>
                <Link href="/" className={styles.navbar__link}>
                  Inicio
                </Link>
              </li>

              <li>
                <Link href="/que-es-puni" className={styles.navbar__link}>
                  ¿Qué es Puni?
                </Link>
              </li>

              <li>
                <Link href="/como-funciona" className={styles.navbar__link}>
                  ¿Cómo funciona?
                </Link>
              </li>

              <li>
                <Link href="/porque-elegirnos" className={styles.navbar__link}>
                  Por qué elegirnos
                </Link>
              </li>

              {/* REGISTROS */}
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
                      <Link href="/forms/repartidores" onClick={closeAllMenus}>
                        Quiero ser repartidor
                      </Link>
                    </li>
                    <li>
                      <Link href="/forms/envios" onClick={closeAllMenus}>
                        Quiero envíos
                      </Link>
                    </li>
                    <li>
                      <Link href="/forms/colaborar" onClick={closeAllMenus}>
                        Quiero colaborar con Puni
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link href="/contacto" className={styles.navbar__link}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

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
                  <Link href="/que-es-puni" onClick={closeAllMenus}>
                    ¿Qué es Puni?
                  </Link>
                </li>

                <li>
                  <Link href="/como-funciona" onClick={closeAllMenus}>
                    ¿Cómo funciona?
                  </Link>
                </li>

                <li>
                  <Link href="/porque-elegirnos" onClick={closeAllMenus}>
                    Por qué elegirnos
                  </Link>
                </li>

                <li>
                  <button onClick={toggleDropdown}>
                    Registros <FaChevronDown />
                  </button>

                  {isDropdownOpen && (
                    <ul className={styles.navbar__mobile_dropdown}>
                      <li>
                        <Link
                          href="/forms/repartidores"
                          onClick={closeAllMenus}
                        >
                          Quiero ser repartidor
                        </Link>
                      </li>
                      <li>
                        <Link href="/forms/envios" onClick={closeAllMenus}>
                          Quiero envíos
                        </Link>
                      </li>
                      <li>
                        <Link href="/forms/colaborar" onClick={closeAllMenus}>
                          Quiero colaborar con Puni
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link href="/contacto" onClick={closeAllMenus}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* BARRA DE GRADIENTE DECORATIVA */}
        <div
          className={`${styles.gradientStrip} ${
            isScrolled ? styles.scrolled : ""
          }`}
        >
          <div className={styles.gradientStrip__segment}></div>
        </div>
      </header>
    </>
  );
}
